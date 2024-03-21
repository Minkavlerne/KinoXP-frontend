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
    id: number;
    name: string;
}

interface MovieShow {
    id: number | null;
    startTime: Date;
    endTime: Date;
    movie: Movie;
    theater: Theater;
}

interface Theater {
    id?: number | null;
    name: string;
    seats?: Array<Seat>;
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
