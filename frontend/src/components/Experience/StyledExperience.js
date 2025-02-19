import styled from "styled-components";

export const ExperiencesMainContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: start;
    gap: 3rem;
    max-width: 60rem;
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
    cursor: pointer;
    padding: 1rem;

    &&:hover {
        background-color: rgb(0, 1, 66);
    }

    h3 {
        font-weight: 700;
        font-size: 2.5rem;
        color: white;
    }

    .dates {
        font-style: italic;
        color: #9d9d9d;
        position: relative;
        bottom: 5px;
    }

    .position-description {
        font-weight: 500;
        color: rgb(207, 205, 205);
    }
`;
