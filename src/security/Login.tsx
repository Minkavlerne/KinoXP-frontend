import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//import { useAuth } from "./security/AuthProvider";
import { useAuth } from "./AuthProvider";
import { User } from "../services/authFacade";

const Login = () => {
    const [user, setUser] = useState({ username: "", password: "" });

    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();

    const [err, setErr] = useState(null);

    const from = location.state?.from?.pathname || "/";

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const user = Object.fromEntries(formData) as unknown as User;

        setErr(null);
        console.log(err);
        auth.signIn(user)
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch((err) => {
                setErr(err);
            });
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded shadow-md w-100">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-bold mb-8">Login</h1>
                    <div className="login-form-group">
                        <label className="block">
                            <span className="text-gray-700">Username: </span>
                            <input type="text" name="username" value={user.username} onChange={(e) => setUser((prev) => ({ ...prev, username: e.target.value }))} required />
                        </label>
                    </div>
                    <div className="login-form-group">
                        <label className="block">
                            <span className="text-gray-700">Password:</span>
                            <input type="password" name="password" value={user.password} onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))} required />
                        </label>
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
