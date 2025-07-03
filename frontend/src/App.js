import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./components/Login/Login";

function App() {
    return (
        <div>
            <div className="navbar">
                <Navbar />
            </div>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
}

export default App;
