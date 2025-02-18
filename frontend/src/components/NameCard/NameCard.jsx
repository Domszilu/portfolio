import React from "react";
import { StyledCardContainer } from "./NameCardStyles";
import Image from "../../assets/profile-image.jpg";
import { RiLinkedinLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

const NameCard = () => {
    return (
        <>
            <StyledCardContainer>
                <img src={Image} alt="Card Image" />
                <h1>Dominik Mészáros</h1>
                <p>
                    Berlin based, fresh and crispy Web Developer gravitating
                    towards meaningful projects.
                </p>
                <div className="card-icons-container">
                    <a
                        href="https://www.linkedin.com/in/dominik-m%C3%A9sz%C3%A1ros-331493175/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <RiLinkedinLine />
                    </a>
                    <a
                        href="https://www.instagram.com/dominik_andras/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IoLogoInstagram />
                    </a>
                    <a
                        href="https://github.com/Domszilu"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiGithub />
                    </a>
                    <a href="mailto:m.dominik.andras@gmail.com">
                        <MdOutlineMailOutline />
                    </a>
                </div>
            </StyledCardContainer>
        </>
    );
};

export default NameCard;
