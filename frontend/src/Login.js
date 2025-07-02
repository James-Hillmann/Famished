import { useState } from "react";
import "./styles/Login.css";
function Login({ onButtonPress }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const button = e.nativeEvent.submitter;
        const action = button.name; // "login" or "createAccount"
        onButtonPress(email, password, action);
    };

    return (
        <form className="login-form" onSubmit={handleLogin}>
            <input
                className="input-email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="input-password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn-login" type="submit" name="login">
                Login
            </button>
            or t
            <button
                className="btn-create-account"
                type="submit"
                name="createAccount"
            >
                Create Account
            </button>
        </form>
    );
}

export default Login;
