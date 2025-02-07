import { useState } from "react";
import { MainHeading } from "../../pages/Styles";
import { TechStackCard, TechStackCardContainer } from "./TechStack.js";
import StackIcon from "tech-stack-icons";
import { useLocation } from "react-router";

// Array of objects for dynamic display
const techStackItems = [
    { name: "HTML", icon: "html5", description: "Markup Language" },
    { name: "CSS", icon: "css3", description: "Style sheet language" },
    { name: "JavaScript", icon: "js", description: "Programming language" },
    {
        name: "Sass",
        icon: "sass",
        description: "Preprocessor scripting language",
    },
    { name: "React", icon: "reactjs", description: "Library" },
    { name: "MongoDB", icon: "mongodb", description: "Database program" },
    { name: "Figma", icon: "figma", description: "Design tool" },
    { name: "Adobe InDesign", icon: "id", description: "Design tool" },
];

const TechStack = () => {
    // logic for rendering the Tech Stack items
    const [showAll, setShowAll] = useState(false);
    const visibleStackItems = showAll
        ? techStackItems
        : techStackItems.slice(0, 4);

    // get current route
    const location = useLocation();

    return (
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
    );
};

export default TechStack;
