import styled from "styled-components";

export const ExperiencesMainContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: start;
    max-width: 60rem;
    gap: 1rem;
`;

export const ExperienceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Poppins", serif;
    border-radius: 8px;
    gap: 1rem;
    transition: 0.5s;
    padding: 1rem 1rem 4rem 1rem;
    position: relative;

    &&:hover {
        background-color: rgb(0, 1, 66);
    }

    h3 {
        font-weight: 700;
        font-size: 2.5rem;
        color: white;
    }

    h4 {
        font-weight: 400;
        position: relative;
        bottom: 5px;
        /* color: rgb(207, 207, 207); */
    }

    .dates {
        font-style: italic;
        color: rgb(180, 180, 180);
        margin-top: 1rem;
    }

    .position-description {
        font-weight: 500;
        color: rgb(207, 205, 205);
        margin-top: 1rem;
    }

    button {
        background-color: transparent;
        border: none;
        color: white;
        font-family: "Poppins", serif;
        font-weight: 600;
        font-size: 1.2rem;
        width: fit-content;
        cursor: pointer;
        transition: 0.5s;
        padding-top: 1rem;
        color: rgb(255, 144, 144);
        position: absolute;
        right: 1rem;

        &:hover {
            color: white;
        }
    }
`;
