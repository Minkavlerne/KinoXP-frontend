import { NavLink } from "react-router-dom";
import AuthStatus from "./security/AuthStatus";
import { useAuth } from "./security/AuthProvider";

export default function NavBar() {
    const auth = useAuth();
    return (
        <>
            <nav className="bg-kino-blue">
                <ul className="text-kino-red text-lg font-bold font-One ">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <li>
                                <NavLink className="hover:underline" to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="hover:underline" to="/movies">Movies</NavLink>
                            </li>
                            <li>
                                <NavLink className="hover:underline" to="/upcoming">Coming Soon</NavLink>
                            </li>
                            {!auth.isLoggedIn() && (
                                <li>
                                    <NavLink className="hover:underline" to="/signup">Sign Up</NavLink>
                                </li>
                            )}
                            {auth.isLoggedIn() && (
                                <li>
                                    <NavLink className="hover:underline" to="/profile">My Profile</NavLink>
                                </li>
                            )}
                            {auth.isLoggedInAs(["ADMIN"]) && (
                                <li>
                                    <NavLink className="hover:underline" to="/theaters">Theaters</NavLink>
                                </li>
                            )}
                            {auth.isLoggedInAs(["ADMIN"]) && (
                                <li>
                                    <NavLink className="hover:underline" to="/movieform">Add Movie</NavLink>
                                </li>
                            )}
                            <AuthStatus />
                        </div>
                    </div>
                </ul>
            </nav>
        </>
    );
}
