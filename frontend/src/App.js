import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api") // Backend URL
            .then((response) => response.json())
            .then((data) => setData(data.message));
    }, []);

    const handleLogin = () => {
        const loginData = {
            username: "myUsername",
            password: "myPassword",
        };
        // Example: send login request (you can replace with your own logic)
        fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData),
        })
            .then((response) => response.json())
            .then((data) => console.log("Login response:", data.name));
    };

    return (
        <div>
            <h1>{data ? data : "Loading..."}</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default App;
