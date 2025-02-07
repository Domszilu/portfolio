import Contact from "../components/Contact/Contact.jsx";
import Hero from "../components/Hero/Hero.jsx";
import NameCard from "../components/NameCard/NameCard.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
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
                        <TechStack />
                        <Contact />
                    </Wrapper>
                </DualColumnWrapper>
            </Wrapper>
        </>
    );
};

export default Home;
