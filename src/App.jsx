import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home.jsx";
import TechStack from "./components/TechStack/TechStack.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="tools" element={<TechStack />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
