import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MovieShow, TheaterWithRowsAndSeats } from "../services/entityFacade";
import { calculateRowsAndSeats } from "../services/calculateRowsAndSeats";
import { TheaterSeats } from "../components/TheaterSeats";

export default function MovieShowTicketsPage() {
    const [movieShow, setMovieShow] = useState<MovieShow | null>(useLocation().state || null);
    const [theater, setTheater] = useState<TheaterWithRowsAndSeats | null>(null);
    const [selectedSeats, setSelectedSeats] = useState<{ row: number; seat: number }[]>([]);
    const [selectedSeatIds, setSelectedSeatIds] = useState<number[]>([]);

    useEffect(() => {
        if (movieShow?.theater.seats) {
            const { rows, seatsPerRow } = calculateRowsAndSeats(movieShow.theater.seats);
            setTheater({ ...movieShow.theater, rows, seatsPerRow });
        }
    }, [movieShow]);

    function handleSeatClick(row: number, seat: number) {
        const seatIndex = selectedSeats.findIndex((s) => s.row === row && s.seat === seat);
        const seatId = movieShow?.theater.seats?.find((s) => s.seatRow === row && s.seatNumber === seat)?.id;
        if (seatId !== undefined) {
            if (selectedSeatIds.includes(seatId)) {
                setSelectedSeatIds(selectedSeatIds.filter((id) => id !== seatId));
            } else {
                setSelectedSeatIds([...selectedSeatIds, seatId]);
            }
        }
        if (seatIndex === -1) {
            setSelectedSeats([...selectedSeats, { row, seat }]);
        } else {
            setSelectedSeats(selectedSeats.filter((s) => s.row !== row || s.seat !== seat));
        }
    }

    return (
        <div className="bg-kino-blue min-h-screen text-kino-grey pb-10 px-10">
            <h1 className="pb-10">MovieShowTicketsPage</h1>
            <div className="grid grid-cols-[350px_auto]">
                <div>
                    <h2>Selected Seats</h2>
                    {selectedSeats.map((seat, index) => (
                        <p key={index}>
                            Row: {seat.row + 1}, Seat: {seat.seat + 1}
                        </p>
                    ))}
                </div>
                {movieShow && (
                    <div className="text-white">
                        <h1>{movieShow.theater.name}</h1>
                        <TheaterSeats rows={theater?.rows || 0} seatsPerRow={theater?.seatsPerRow || 0} onSeatClick={(row, seat) => handleSeatClick(row, seat)} />
                    </div>
                )}
            </div>
        </div>
    );
}
