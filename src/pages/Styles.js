import styled from "styled-components";

export const StyledSeparator = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    padding: 5%;
`;

export const MainHeading = styled.h1`
    font-family: "Poppins", serif;
    font-weight: 900;
    font-size: clamp(2.1em, calc(8vw + 1rem), 10rem);
    color: white;
    text-transform: uppercase;
    text-align: center;
    line-height: 1;
    white-space: nowrap;

    span {
        color: #9d9d9d;
        text-transform: uppercase;
        display: block;
    }
`;

export const StyledParagraph = styled.p`
    font-family: "Poppins", serif;
    font-weight: 500;
    font-size: 1.9rem;
    color: white;
    text-align: center;
`;
