import React from "react";
import { useLocation } from "react-router";
import { MainHeading } from "../../pages/Styles";
import experiences from "../../data/experience";
import {
    ExperienceContainer,
    ExperiencesMainContainer,
} from "./StyledExperience";

const Experience = () => {
    // get current route/endpoint
    const location = useLocation();
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
                                    <p className="dates">{experience.year}</p>
                                    <p className="position-description">
                                        {experience.description}
                                    </p>
                                </div>
                            </ExperienceContainer>
                        ))}
                    </ExperiencesMainContainer>
                </>
            )}
        </>
    );
};

export default Experience;
