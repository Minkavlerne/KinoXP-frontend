import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Movies from "./components/Movies";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import UpComingPage from "./components/UpComingMovies";


export default function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/movies" element={<Movies/>} />
        <Route path="/tickets" element={<p>Tickets</p>} />
        <Route path="/upcoming" element={<UpComingPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
      </Routes>
      </>
  );
}

