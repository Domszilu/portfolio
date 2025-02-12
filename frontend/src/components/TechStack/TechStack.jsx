import { useState } from "react";
import { DualColumnWrapper, MainHeading, Wrapper } from "../../pages/Styles";
import { TechStackCard, TechStackCardContainer } from "./TechStack.js";
import StackIcon from "tech-stack-icons";
import { useLocation } from "react-router";
import NavBar from "../NavBar/NavBar.jsx";
import NameCard from "../NameCard/NameCard.jsx";
import Contact from "../Contact/Contact.jsx";
import useTechStack from "../../hooks/useTechStack.js";
import Footer from "../Footer/Footer.jsx";

const TechStack = () => {
    // custom hook, contains logic for conditional rendering
    const { showAll, setShowAll, visibleStackItems, techStackItems } =
        useTechStack();

    // get current route
    const location = useLocation();

    return (
        <>
            {location.pathname !== "/tools" && (
                <>
                    <MainHeading>
                        My <span>Tech Stack</span>
                    </MainHeading>
                    <TechStackCardContainer>
                        {visibleStackItems.map((tech, index) => (
                            <TechStackCard key={index}>
                                <div className="icon-container">
                                    <StackIcon name={tech.icon} />
                                </div>
                                <div className="card-text-container">
                                    <h3>{tech.name}</h3>
                                    <p>{tech.description}</p>
                                </div>
                            </TechStackCard>
                        ))}
                        <button onClick={() => setShowAll(!showAll)}>
                            {showAll ? "Show Less" : "Show More"}
                        </button>
                    </TechStackCardContainer>
                </>
            )}
            {location.pathname == "/tools" && (
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
                                <TechStackCardContainer>
                                    {techStackItems.map((tech, index) => (
                                        <TechStackCard key={index}>
                                            <div className="icon-container">
                                                <StackIcon name={tech.icon} />
                                            </div>
                                            <div className="card-text-container">
                                                <h3>{tech.name}</h3>
                                                <p>{tech.description}</p>
                                            </div>
                                        </TechStackCard>
                                    ))}
                                </TechStackCardContainer>
                                <Contact />
                            </Wrapper>
                        </DualColumnWrapper>
                    </Wrapper>
                    <Footer />
                </>
            )}
        </>
    );
};

export default TechStack;
