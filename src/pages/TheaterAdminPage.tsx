import { useEffect, useState } from "react";
import { Theater } from "../services/entityFacade";
import { getTheaters } from "../services/apiFacade";

export default function TheaterAdminPage() {
    const [theaters, setTheaters] = useState<Theater[]>([]);

    useEffect(() => {
        getTheaters().then((data) => setTheaters(data));
    }, []);

    return (
        <div className="bg-kino-blue min-h-screen text-kino-white">
            <h1>Theater Admin Page</h1>
            <ul>
                {theaters &&
                    theaters.map((theater) => (
                        <li key={theater.id}>
                            <p>Name: {theater.name}</p>
                            <p>Number of seats: {theater.seats.length}</p>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
