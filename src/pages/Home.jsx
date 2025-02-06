import NameCard from "../components/NameCard/NameCard.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import { Wrapper } from "./Styles.js";

const Home = () => {
    return (
        <>
            <NavBar />
            <Wrapper>
                <NameCard />
            </Wrapper>
        </>
    );
};

export default Home;
