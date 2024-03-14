interface Movie {
  id: number;
  title: string;
  description: string;
  posterBase64: string;
  posterUrl: string;
  trailerUrl: string;
  ageLimit: number;
  duration: string;
  categories: Array<Category>;
}

interface Category {
  id: number;
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
  movieShowList: Array<MovieShow>;
}
interface Booking {
  id: number;
  bookingNumber: string;
  userId: number;
  movieShowId: number;
}

export type { Movie, Category, MovieShow, Theater, Booking };
