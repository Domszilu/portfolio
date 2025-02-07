import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home.jsx";
import TechStack from "./components/TechStack/TechStack.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="tools" element={<TechStack />} />
            </Routes>
        </>
    );
}

export default App;
