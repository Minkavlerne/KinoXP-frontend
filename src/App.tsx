import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Movies from "./components/Movies";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MovieDetailView from "./components/MovieDetailView";

export default function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/movies" element={<Movies />} />
                <Route path="/tickets" element={<p>Tickets</p>} />
                <Route path="/upcoming" element={<p>Coming Soon</p>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/movies/:id" element={<MovieDetailView />} />
            </Routes>
        </>
    );
