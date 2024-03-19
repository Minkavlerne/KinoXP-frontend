type TheaterSeatsProps = {
    rows: number;
    seatsPerRow: number;
};

export const TheaterSeats = ({ rows, seatsPerRow }: TheaterSeatsProps) => {
    const seats = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < seatsPerRow; j++) {
            row.push(
                <div key={j} className="border p-2 m-1">
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
