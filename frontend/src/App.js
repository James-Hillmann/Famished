import Hello from "./pages/hello";
import "./styles/App.css";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";

function App() {
    return (
        <div>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="container">
                <Login />
            </div>
        </div>
    );
}

export default App;
