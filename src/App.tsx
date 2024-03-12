import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from './NavBar';
export default function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/movies" element={<p>Movies</p>} />
        <Route path="/tickets" element={<p>Tickets</p>} />
        <Route path="/upcoming" element={<p>Coming Soon</p>} />
        <Route path="/login" element={<p>Login</p>} />
        <Route path="/signup" element={<p>Sign Up</p>} />
      </Routes>
      </>
  );
}

