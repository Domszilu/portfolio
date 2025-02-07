import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home.jsx";
import TechStack from "./components/TechStack/TechStack.jsx";
import Projects from "./components/Projects/Projects.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="tools" element={<TechStack />} />
                <Route path="projects" element={<Projects />} />
            </Routes>
        </>
    );
}

export default App;
