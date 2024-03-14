import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav>
                <ul>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <li>
                                <NavLink to="/movies">Movies</NavLink>
                            </li>
                            <li>
                                <NavLink to="/tickets">Tickets</NavLink>
                            </li>
                            <li>
                                <NavLink to="/upcoming">Coming Soon</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signup">Sign Up</NavLink>
                            </li>
                        </div>
                    </div>
                </ul>
            </nav>
        </>
    );
}
