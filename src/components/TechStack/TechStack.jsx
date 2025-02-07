import { useState } from "react";
import { MainHeading } from "../../pages/Styles";
import { TechStackCard, TechStackCardContainer } from "./TechStack.js";
import StackIcon from "tech-stack-icons";

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
    const [showAll, setShowAll] = useState(false);
    const visibleItems = showAll ? techStackItems : techStackItems.slice(0, 4);

    return (
        <>
            <MainHeading>
                My <span>Tech Stack</span>
            </MainHeading>
            {/* {visibleItems.map((tech, index) =())} */}
            <TechStackCardContainer>
                <TechStackCard>
                    <div className="icon-container">
                        <StackIcon name="html5" />
                    </div>
                    <div className="card-text-container">
                        <h3>HTML</h3>
                        <p>Markup Language</p>
                    </div>
                </TechStackCard>
                <TechStackCard>
                    <div className="icon-container">
                        <StackIcon name="css3" />
                    </div>
                    <div className="card-text-container">
                        <h3>CSS</h3>
                        <p>Style sheet language</p>
                    </div>
                </TechStackCard>
                <TechStackCard>
                    <div className="icon-container">
                        <StackIcon name="js" />
                    </div>
                    <div className="card-text-container">
                        <h3>JavaScript</h3>
                        <p>Programming language</p>
                    </div>
                </TechStackCard>
                <TechStackCard>
                    <div className="icon-container">
                        <StackIcon name="sass" />
                    </div>
                    <div className="card-text-container">
                        <h3>Sass</h3>
                        <p>Preprocessor scripting language</p>
                    </div>
                </TechStackCard>
                <TechStackCard>
                    <div className="icon-container">
                        <StackIcon name="reactjs" />
                    </div>
                    <div className="card-text-container">
                        <h3>React</h3>
                        <p>Library</p>
                    </div>
                </TechStackCard>
                <TechStackCard>
                    <div className="icon-container">
                        <StackIcon name="mongodb" />
                    </div>
                    <div className="card-text-container">
                        <h3>MongoDB</h3>
                        <p>Database program</p>
                    </div>
                </TechStackCard>
                <TechStackCard>
                    <div className="icon-container">
                        <StackIcon name="figma" />
                    </div>
                    <div className="card-text-container">
                        <h3>Figma</h3>
                        <p>Design tool</p>
                    </div>
                </TechStackCard>
                <TechStackCard>
                    <div className="icon-container">
                        <StackIcon name="id" />
                    </div>
                    <div className="card-text-container">
                        <h3>Adobe InDesign</h3>
                        <p>Design tool</p>
                    </div>
                </TechStackCard>
            </TechStackCardContainer>
        </>
    );
};

export default TechStack;
