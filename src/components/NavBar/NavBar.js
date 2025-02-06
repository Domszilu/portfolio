import styled from "styled-components";

export const StyledNavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;

    nav {
        border-radius: 20px;
        background-color: #9d9d9d;
        width: 29rem;
        padding: 1rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    svg {
        color: white;
        height: 2.3rem;
        width: 2.3rem;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
    }

    span {
        background-color: #9d9d9d;
        font-family: "Poppins", serif;
        font-size: 1.6rem;
        padding: 0.3rem 0.8rem;
        border-radius: 5px;
        position: absolute;
        bottom: -30px;
        font-size: 1.2rem;
        color: white;
        opacity: 0;
        transform: translateY(-30px);
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    a:hover span {
        opacity: 1;
        transform: translateY(13px);
    }
`;
