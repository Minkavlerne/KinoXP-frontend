import { useState } from "react";

type TheaterSeatsProps = {
    rows: number;
    seatsPerRow: number;
    onSeatClick?: (row: number, seat: number) => void;
};

export const TheaterSeats = ({ rows, seatsPerRow, onSeatClick }: TheaterSeatsProps) => {
    const [selectedSeats, setSelectedSeats] = useState<{ row: number; seat: number }[]>([]);
    const seats = [];

    for (let i = 0; i < rows; i++) {
        const row: JSX.Element[] = [];
        for (let j = 0; j < seatsPerRow; j++) {
            row.push(
                <div
                    key={j}
                    className={`border p-2 m-1 ${selectedSeats.find((s) => s.row === i && s.seat === j) ? "bg-kino-red" : "bg-green-500"}`}
                    onClick={() => {
                        onSeatClick && onSeatClick(i, j);
                        const seatIndex = selectedSeats.findIndex((s) => s.row === i && s.seat === j);
                        if (seatIndex === -1) {
                            setSelectedSeats([...selectedSeats, { row: i, seat: j }]);
                        } else {
                            setSelectedSeats(selectedSeats.filter((s) => s.row !== i || s.seat !== j));
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
