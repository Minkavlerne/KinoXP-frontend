import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MovieDetailView from "./components/MovieDetailView";
import UpComingPage from "./pages/UpComingPage";
import MovieFormPage from "./pages/MovieFormPage";
import HomePage from "./pages/HomePage";
import "./Style.css";
import TheaterAdminPage from "./pages/TheaterAdminPage";
import RequireAuth from "./security/RequireAuth";
import Logout from "./security/Logout";
import MoviesPage from "./pages/MoviesPage";
import TheaterAdminView from "./components/TheaterAdminView";

export default function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/tickets" element={<p>Tickets</p>} />
                <Route path="/upcoming" element={<UpComingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/movies/:id" element={<MovieDetailView />} />
                <Route path="/upcoming/:id" element={<MovieDetailView />} />
                <Route
                    path="/theaters"
                    element={
                        <RequireAuth roles={["ADMIN"]}>
                            <TheaterAdminPage />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/theaters/:id"
                    element={
                        <RequireAuth roles={["ADMIN"]}>
                            <TheaterAdminView />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/theaters-add"
                    element={
                        <RequireAuth roles={["ADMIN"]}>
                            <h1>theaters add form TODO</h1>
                        </RequireAuth>
                    }
                />
                <Route
                    path="/movieform"
                    element={
                        <RequireAuth roles={["ADMIN"]}>
                            <MovieFormPage />
                        </RequireAuth>
                    }
                />
                <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
        </>
    );
}
