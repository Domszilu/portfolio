import Contact from "../components/Contact/Contact.jsx";
import NameCard from "../components/NameCard/NameCard.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import { MainHeading, StyledParagraph, Wrapper } from "./Styles.js";

const Home = () => {
    return (
        <>
            <NavBar />
            <Wrapper>
                <NameCard />
                <MainHeading>
                    Junior <span>Web Developer</span>
                </MainHeading>
                <StyledParagraph>
                    Passionate about creating intuitive and smooth user
                    experiences. Currently looking for work that aligns with my
                    values, thus emphasizing purpose over profit.
                </StyledParagraph>
                <MainHeading>
                    Let's work <span>together</span>
                </MainHeading>
                <Contact />
            </Wrapper>
        </>
    );
};

export default Home;
