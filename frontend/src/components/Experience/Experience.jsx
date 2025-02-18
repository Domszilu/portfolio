import React from "react";
import { useLocation } from "react-router";
import { MainHeading } from "../../pages/Styles";
import {
    ProjectContainer,
    ProjectsMainContainer,
} from "../Projects/StyledProjects";
import experiences from "../../data/experience";

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
                    <ProjectsMainContainer>
                        {experiences.map((experience, index) => (
                            <ProjectContainer key={index}>
                                <div className="project-description-container">
                                    <h3>{experience.position}</h3>
                                    <p className="created-at">
                                        {experience.year}
                                    </p>
                                    <p className="project-description">
                                        {experience.description}
                                    </p>
                                </div>
                            </ProjectContainer>
                        ))}
                    </ProjectsMainContainer>
                </>
            )}
        </>
    );
};

export default Experience;
