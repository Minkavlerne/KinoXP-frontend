import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Movies from "./components/Movies";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MovieDetailView from "./components/MovieDetailView";
import UpComingMovies from "./components/UpComingMovies";
import MovieFormPage from "./pages/MovieFormPage";

export default function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/movies" element={<Movies />} />
                <Route path="/tickets" element={<p>Tickets</p>} />
                <Route path="/upcoming" element={<UpComingMovies/>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/movies/:id" element={<MovieDetailView />} />
                <Route path="/upcoming/:id" element={<MovieDetailView />} />
                <Route path="/movieform" element={<MovieFormPage />} />
            </Routes>
        </>
    );
}
