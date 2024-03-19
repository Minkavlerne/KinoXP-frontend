interface Movie {
    id: number;
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
interface Booking {
    id: number;
    bookingNumber: string;
    username: string;
    movieShowId: number;
}

interface Seat {
    id: number;
    row: number;
    column: number;
    type: string;
}

export type { Movie, Category, MovieShow, Theater, Booking, Seat };
