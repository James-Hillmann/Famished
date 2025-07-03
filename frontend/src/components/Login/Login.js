import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return () => unsubscribe();
    }, []);

    const handleAccounts = (email, password, action) => {
        if (action === "login") {
            handleLogin(email, password);
        } else if (action === "createAccount") {
            handleSignup(email, password);
        }
    };

    const handleLogin = (email, password) => {
        console.log("Login attempt:", email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Login success:", userCredential.user);
                alert("Login successful!");
            })
            .catch((error) => {
                console.error("Login error:", error.message);
                alert("Login failed: " + error.message);
            });
    };

    const handleSignup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Signup success:", userCredential.user);
                alert("Account created!");
            })
            .catch((error) => {
                console.error("Signup error:", error.message);
                alert("Signup failed: " + error.message);
            });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const button = e.nativeEvent.submitter;
        const action = button.name;
        handleAccounts(email, password, action);
    };

    return (
        <div>
            <div className="current-account">
                {currentUser ? (
                    <p>Logged in as: {currentUser.email}</p>
                ) : (
                    <p>No user is logged in.</p>
                )}
            </div>

            <form className="login-form" onSubmit={handleFormSubmit}>
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
                or
                <button
                    className="btn-create-account"
                    type="submit"
                    name="createAccount"
                >
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default Login;
