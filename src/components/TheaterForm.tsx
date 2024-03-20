import { useState } from "react";
import { TheaterWithRowsAndSeats } from "../services/entityFacade";
import { TheaterSeats } from "./TheaterSeats";
import { postTheater } from "../services/apiFacade";
import { useNavigate } from "react-router-dom";

const EMPTY_THEATER = {
    id: null,
    name: "",
    seats: [],
    rows: 0,
    seatsPerRow: 0,
};

export default function TheaterForm() {
    const navigate = useNavigate();
    const theaterToEdit = null;
    const [formData, setFormData] = useState<TheaterWithRowsAndSeats>(theaterToEdit || EMPTY_THEATER);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const theaterObj = {
            name: formData.name,
            seatRows: Number(formData.rows),
            seatNumbers: Number(formData.seatsPerRow),
        };
        console.log(theaterObj);
        postTheater(theaterObj);
        navigate("/theaters");
    }

    return (
        <div className="bg-kino-blue min-h-screen min-w-screen text-kino-white text-center">
            <h1>TheaterForm</h1>
            <div className="grid grid-cols-[350px_auto] py-10">
                <div className="flex flex-col items-center justify-center">
                    <form>
                        <div className="flex flex-col items-center space-y-4 w-80 py-2 text-center">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" onChange={handleChange} className="text-kino-blue" />
                            <label htmlFor="rows">Rows</label>
                            <input type="number" name="rows" id="rows" onChange={handleChange} className="text-kino-blue" />
                            <label htmlFor="seatsPerRow">Seats per row</label>
                            <input type="number" name="seatsPerRow" id="seatsPerRow" onChange={handleChange} className="text-kino-blue" />
                        </div>
                    </form>
                    <button type="submit" className="w-1/4 px-2 py-1 border-solid rounded bg-kino-grey mx-2" onClick={handleSubmit}>
                        Add Theater
                    </button>
                </div>
                <div className="flex flex-col text-center justify-center items-center">
                    <h1 className="text-xl">{formData.name}</h1>
                    <TheaterSeats rows={formData.rows} seatsPerRow={formData.seatsPerRow} />
                </div>
            </div>
        </div>
    );
}
