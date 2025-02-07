import styled from "styled-components";

export const ProjectsMainContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: start;
    gap: 1rem;
    max-width: 60rem;
`;

export const ProjectContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Poppins", serif;
    border-radius: 8px;
    gap: 1rem;
    transition: 0.5s;
    cursor: pointer;

    &&:hover {
        background-color: rgb(0, 1, 66);
    }

    h3 {
        font-weight: 700;
        font-size: 2.5rem;
        color: white;
    }

    p {
        font-weight: 500;
        color: #9d9d9d;
    }

    img {
        width: 15rem;
        height: 15rem;
        object-fit: cover;
        border-radius: 13px;
        margin: 1rem;
        aspect-ratio: 1/1;
    }
`;
