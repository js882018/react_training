import { useNavigate, Navigate } from 'react-router-dom';
import { login } from '../auth.service'
import { useState } from 'react';
import { isAuthenticated } from "../auth.service";

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    if (isAuthenticated()) {
        return <Navigate to="/todos" replace />;
        // navigate("/todos");
    }

    const doLogin = (e) => {
        e.preventDefault();
        if (username === "user" && password === "password") {
            login("orvynbmimrkcnlcjkhwmmvkwuwjsjvmi");
            navigate("/todos");
        } else {
            setError("Invalid username or password!");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-title">Login</h1>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={doLogin}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );

}
export default Login;