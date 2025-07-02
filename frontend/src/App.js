import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";

function App() {
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

    return (
        <div>
            <div>
                {currentUser ? (
                    <p>Logged in as: {currentUser.email}</p>
                ) : (
                    <p>No user is logged in.</p>
                )}
            </div>
            <Login onButtonPress={handleAccounts} />
        </div>
    );
}

export default App;
