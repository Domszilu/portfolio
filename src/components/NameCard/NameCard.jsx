import React from "react";
import { StyledCardContainer } from "./NameCardStyles";
import Image from "../../assets/profile-image.jpg";

const NameCard = () => {
    return (
        <>
            <StyledCardContainer>
                <img src={Image} alt="Card Image" />
                <h1>Dominik Mészáros</h1>
                <p>
                    Fresh and crispy Web Developer gravitating towards
                    meaningful projects
                </p>
            </StyledCardContainer>
        </>
    );
};

export default NameCard;
