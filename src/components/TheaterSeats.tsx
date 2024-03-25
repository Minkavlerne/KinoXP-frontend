import { useState } from "react";
import { Seat } from "../services/entityFacade";

type TheaterSeatsProps = {
    rows: number;
    seatsPerRow: number;
    theaterSeats?: Seat[];
    bookedSeatIds?: number[];
    onSeatClick?: (row: number, seat: number) => void;
};

export const TheaterSeats = ({ rows, seatsPerRow, onSeatClick, bookedSeatIds, theaterSeats }: TheaterSeatsProps) => {
    const [selectedSeats, setSelectedSeats] = useState<{ row: number; seat: number }[]>([]);
    const seats = [];

    for (let i = 0; i < rows; i++) {
        const row: JSX.Element[] = [];
        for (let j = 0; j < seatsPerRow; j++) {
            const seatId = theaterSeats?.find((s) => s.seatRow === i && s.seatNumber === j)?.id;
            const isBooked = seatId && theaterSeats && bookedSeatIds?.includes(seatId);
            row.push(
                <div
                    key={j}
                    className={`border p-2 m-1 ${isBooked ? "bg-kino-red" : selectedSeats.find((s) => s.row === i && s.seat === j) ? "bg-kino-red" : "bg-green-500"}`}
                    onClick={() => {
                        if (!isBooked) {
                            onSeatClick && onSeatClick(i, j);
                            const seatIndex = selectedSeats.findIndex((s) => s.row === i && s.seat === j);
                            if (seatIndex === -1) {
                                setSelectedSeats([...selectedSeats, { row: i, seat: j }]);
                            } else {
                                setSelectedSeats(selectedSeats.filter((s) => s.row !== i || s.seat !== j));
                            }
                        }
                    }}
                >
                    Seat {j + 1}
                </div>
            );
        }
        seats.push(
            <div key={i} className="flex justfiy-center items-center">
                Row {i + 1} {row}
            </div>
        );
    }

    return <div>{seats}</div>;
};
