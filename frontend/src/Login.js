import { useState } from "react";

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
        <form onSubmit={handleLogin}>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" name="login">
                Login
            </button>
            <button type="submit" name="createAccount">
                Create Account
            </button>
        </form>
    );
}

export default Login;
