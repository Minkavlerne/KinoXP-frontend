import { useEffect, useState } from "react";
import { TheaterWithRowsAndSeats } from "../services/entityFacade";
import { getTheaters } from "../services/apiFacade";
import { calculateRowsAndSeats } from "../services/calculateRowsAndSeats";
import { Link } from "react-router-dom";

export default function TheaterAdminPage() {
    const [theaters, setTheaters] = useState<TheaterWithRowsAndSeats[]>([]);

    useEffect(() => {
        getTheaters().then((data) => {
            const updatedTheaters = data.map((theater: TheaterWithRowsAndSeats) => {
                const { rows, seatsPerRow } = calculateRowsAndSeats(theater.seats);
                return { ...theater, rows, seatsPerRow };
            });
            setTheaters(updatedTheaters);
        });
    }, []);

    return (
        <div className="bg-kino-blue min-h-screen text-kino-white px-10 text-center">
            <h1 className="pb-4">Theater Admin Page</h1>
            <Link to="/theaters-add" className="w-1/8 px-2 py-2 border-solid rounded bg-kino-grey mx-2">
                Add Theater
            </Link>
            <div className="pt-10 grid grid-cols-4 gap-2 justify-items-center">
                {theaters &&
                    theaters.map((theater) => (
                        <div key={theater.id} className="border-solid rounded">
                            <p>Name: {theater.name}</p>
                            <p className="pb-2">Capacity: {theater.seats.length}</p>
                            <Link to={`/theaters/${theater.id}`} className="w-1/2 px-2 py-1 border-solid rounded bg-kino-grey">
                                Details
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
}
