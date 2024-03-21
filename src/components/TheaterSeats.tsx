type TheaterSeatsProps = {
    rows: number;
    seatsPerRow: number;
};

export const TheaterSeats = ({ rows, seatsPerRow }: TheaterSeatsProps) => {
    const seats = [];

    for (let i = 1; i <= rows; i++) {
        const row = [];
        for (let j = 1; j <= seatsPerRow; j++) {
            row.push(
                <div key={j} className="border p-2 m-1">
                    Seat {j}
                </div>
            );
        }
        seats.push(
            <div key={i} className="flex justfiy-center items-center">
                Row {i} {row}
            </div>
        );
    }

    return <div>{seats}</div>;
};
