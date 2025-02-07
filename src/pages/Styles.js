import styled from "styled-components";

// Styled Components that may be used for different Components

// media queries
const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
};

const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
};

// Main wrapper for dual-column style
export const DualColumnWrapper = styled.div`
    /* min-height: 100vh; */
    display: flex;
    justify-content: center;
    flex-flow: column;
    margin: auto;
    flex: 1 0 0px;
    gap: 5rem;

    @media ${device.tablet} {
        flex-direction: row;
    }
`;

// Wrapper with Flexbox, centered alignment
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;
    gap: 5rem;
    @media ${device.tablet} {
        align-items: start;
    }
`;

// Main container for padding between Components
export const MainContainer = styled.div`
    padding-bottom: 8rem;
`;

// Dual-color headings
export const MainHeading = styled.h1`
    font-family: "Poppins", serif;
    font-weight: 900;
    font-size: clamp(2.1em, calc(8vw + 1rem), 10rem);
    color: white;
    text-transform: uppercase;
    text-align: center;
    line-height: 1;
    white-space: nowrap;
    margin-bottom: 5rem;

    span {
        color: #9d9d9d;
        text-transform: uppercase;
        display: block;
    }

    @media ${device.tablet} {
        text-align: start;
    }
`;

// Paragraphs
export const StyledParagraph = styled.p`
    font-family: "Poppins", serif;
    font-weight: 500;
    font-size: 1.8rem;
    color: white;
    text-align: center;
    max-width: 65rem;

    @media ${device.tablet} {
        text-align: start;
    }
`;
