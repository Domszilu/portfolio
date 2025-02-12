import { DualColumnWrapper, MainHeading, Wrapper } from "../../pages/Styles";
import { ProjectContainer, ProjectsMainContainer } from "./StyledProjects";
import projects from "../../data/projects.js";
import { useLocation } from "react-router";
import NavBar from "../NavBar/NavBar.jsx";
import NameCard from "../NameCard/NameCard.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";

const Projects = () => {
    // get current route/endpoint
    const location = useLocation();
    return (
        <>
            {location.pathname !== "/projects" && (
                <>
                    <MainHeading>
                        My Latest<span>Projects</span>
                    </MainHeading>
                    <ProjectsMainContainer>
                        {projects.map((project, index) => (
                            <ProjectContainer
                                key={index}
                                onClick={() =>
                                    window.open(
                                        project.url,
                                        "_blank",
                                        "noopener, noreferrer"
                                    )
                                }
                            >
                                <img
                                    src={project.thumbnail}
                                    alt={project.name}
                                />
                                <div className="project-description-container">
                                    <h3>{project.name}</h3>
                                    <p className="created-at">
                                        {project.createdAt}
                                    </p>
                                    <p className="project-description">
                                        {project.description}
                                    </p>
                                </div>
                            </ProjectContainer>
                        ))}
                    </ProjectsMainContainer>
                </>
            )}
            {location.pathname == "/projects" && (
                <>
                    <NavBar />
                    <Wrapper>
                        <DualColumnWrapper>
                            <Wrapper>
                                <NameCard />
                            </Wrapper>
                            <Wrapper>
                                <MainHeading>
                                    My Latest<span>Projects</span>
                                </MainHeading>
                                <ProjectsMainContainer>
                                    {projects.map((project, index) => (
                                        <ProjectContainer
                                            key={index}
                                            onClick={() =>
                                                window.open(
                                                    project.url,
                                                    "_blank",
                                                    "noopener, noreferrer"
                                                )
                                            }
                                        >
                                            <img
                                                src={project.thumbnail}
                                                alt={project.name}
                                            />
                                            <div className="project-description-container">
                                                <h3>{project.name}</h3>
                                                <p>{project.description}</p>
                                            </div>
                                        </ProjectContainer>
                                    ))}
                                </ProjectsMainContainer>
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

export default Projects;
