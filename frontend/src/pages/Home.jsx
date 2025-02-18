import Contact from "../components/Contact/Contact.jsx";
import Experience from "../components/Experience/Experience.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Hero from "../components/Hero/Hero.jsx";
import NameCard from "../components/NameCard/NameCard.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import Projects from "../components/Projects/Projects.jsx";
import TechStack from "../components/TechStack/TechStack.jsx";
import { DualColumnWrapper, Wrapper } from "./Styles.js";

const Home = () => {
    return (
        <>
            <NavBar />
            <Wrapper>
                <DualColumnWrapper>
                    <Wrapper>
                        <NameCard />
                    </Wrapper>
                    <Wrapper>
                        <Hero />
                        <Projects />
                        <Experience />
                        <TechStack />
                        <Contact />
                    </Wrapper>
                </DualColumnWrapper>
            </Wrapper>
            <Footer />
        </>
    );
};

export default Home;
