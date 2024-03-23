import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MovieShow, TheaterWithRowsAndSeats, Booking } from "../services/entityFacade";
import { calculateRowsAndSeats } from "../services/calculateRowsAndSeats";
import { TheaterSeats } from "../components/TheaterSeats";
import { postBooking } from "../services/apiFacade";

export default function MovieShowTicketsPage() {
    const [movieShow] = useState<MovieShow | null>(useLocation().state || null);
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

    async function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const userName = localStorage.getItem("username");
        if (userName) {
            const newBooking: Booking = {
                id: null,
                userName: userName,
                movieShowId: movieShow!.id!,
                seatIds: selectedSeatIds,
            };
            postBooking(newBooking);
        }
    }

    return (
        <div className="bg-kino-blue min-h-screen text-kino-grey pb-10 px-10 text-white">
            <h1 className="pb-10 text-center">Seat selection for {movieShow?.movie.title}</h1>
            <div className="grid grid-cols-[350px_auto]">
                <div>
                    <h2>Selected Seats</h2>
                    {selectedSeats.map((seat, index) => (
                        <p key={index}>
                            Row: {seat.row + 1}, Seat: {seat.seat + 1}
                        </p>
                    ))}
                    <div className="pt-5">
                        <button className="p-2 border-solid rounded bg-blue-500" onClick={handleClick}>
                            Book seats
                        </button>
                    </div>
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
