import styled from "styled-components";

export const FooterWrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 19.8rem 1rem 8rem 1rem;
    font-size: clamp(1rem, calc(1vw + 1rem), 1.6rem);
    font-weight: 500;
    text-align: center;
    p {
        font-family: "Poppins", serif;
        color: #9d9d9d;
    }

    a {
        text-decoration: none;
        color: #f16d6d;
    }
`;
