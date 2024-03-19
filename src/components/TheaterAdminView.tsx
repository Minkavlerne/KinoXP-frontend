import { useParams } from "react-router-dom";
import { TheaterWithRowsAndSeats } from "../services/entityFacade";
import { getTheaterById } from "../services/apiFacade";
import { useEffect, useState } from "react";
import { calculateRowsAndSeats } from "../services/calculateRowsAndSeats";
import { TheaterSeats } from "./TheaterSeats";

export default function TheaterAdminView() {
    const { id } = useParams();
    const [theater, setTheater] = useState<TheaterWithRowsAndSeats | null>(null);

    useEffect(() => {
        getTheaterById(Number(id)).then((data) => {
            const { rows, seatsPerRow } = calculateRowsAndSeats(data.seats);
            setTheater({ ...data, rows, seatsPerRow });
        });
    }, [id, theater]);

    return (
        <div className="bg-kino-blue min-h-screen text-kino-white flex flex-col items-center justify-center">
            {theater ? (
                <>
                    <h1 className="py-3 text-4xl">{theater.name}</h1>
                    <TheaterSeats rows={theater.rows} seatsPerRow={theater.seatsPerRow} />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
