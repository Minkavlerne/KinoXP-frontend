export function calculateRowsAndSeats(seats: { id: number; seatRow: number; seatNumber: number; type: string }[]) {
    let rows = 0;
    let seatsPerRow = 0;

    seats.forEach((seat) => {
        rows = Math.max(rows, seat.seatRow);
        seatsPerRow = Math.max(seatsPerRow, seat.seatNumber);
    });
    console.log(rows, seatsPerRow);

    return { rows: rows + 1, seatsPerRow: seatsPerRow + 1 };
}
