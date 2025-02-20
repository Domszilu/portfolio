import { useLocation } from "react-router";
import { DualColumnWrapper, MainHeading, Wrapper } from "../../pages/Styles";
import experiences from "../../data/experience";
import {
    ExperienceContainer,
    ExperiencesMainContainer,
} from "./StyledExperience";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer";
import NameCard from "../NameCard/NameCard";

const Experience = () => {
    const location = useLocation(); // get current route

    return (
        <>
            {location.pathname !== "/experience" && (
                <>
                    <MainHeading>
                        About My <span>Experience</span>
                    </MainHeading>
                    <ExperiencesMainContainer>
                        {experiences.map((experience, index) => (
                            <ExperienceContainer key={index}>
                                <div className="project-description-container">
                                    <h3>{experience.position}</h3>
                                    <h4>{experience.company}</h4>
                                    <p className="position-description">
                                        {experience.description}
                                    </p>
                                    <p className="dates">{experience.year}</p>
                                    {/* <button>Read More</button> */}
                                </div>
                            </ExperienceContainer>
                        ))}
                    </ExperiencesMainContainer>
                </>
            )}
            {location.pathname == "/experience" && (
                <>
                    <NavBar />
                    <Wrapper>
                        <DualColumnWrapper>
                            <Wrapper>
                                <NameCard />
                            </Wrapper>
                            <Wrapper>
                                <MainHeading>
                                    My <span>Tech Stack</span>
                                </MainHeading>
                                <ExperiencesMainContainer>
                                    {experiences.map((experience, index) => (
                                        <ExperienceContainer key={index}>
                                            <div className="project-description-container">
                                                <h3>{experience.position}</h3>
                                                <h4>{experience.company}</h4>
                                                <p className="position-description">
                                                    {experience.description}
                                                </p>
                                                <p className="dates">
                                                    {experience.year}
                                                </p>
                                                {/* <button>Read More</button> */}
                                            </div>
                                        </ExperienceContainer>
                                    ))}
                                </ExperiencesMainContainer>
                            </Wrapper>
                        </DualColumnWrapper>
                    </Wrapper>
                    <Footer />
                </>
            )}
        </>
    );
};

export default Experience;
