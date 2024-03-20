interface Movie {
    id: number | null;
    title: string;
    description: string;
    posterBase64: string;
    posterUrl: string;
    trailerUrl: string;
    ageLimit: number;
    duration: string;
    releaseDate: string;
    categories: Array<string>;
}

interface Category {
    name: string;
}

interface MovieShow {
    id: number;
    startTime: Date;
    endTime: Date;
    movieId: number;
    theaterId: number;
}

interface Theater {
    id: number;
    name: string;
    seats: Array<Seat>;
}

interface TheaterWithRowsAndSeats extends Theater {
    rows: number;
    seatsPerRow: number;
}

interface Booking {
    id: number;
    bookingNumber: string;
    username: string;
    movieShowId: number;
}

interface Seat {
    id: number;
    seatRow: number;
    seatNumber: number;
    type: string;
}

export type { Movie, Category, MovieShow, Theater, TheaterWithRowsAndSeats, Booking, Seat };
