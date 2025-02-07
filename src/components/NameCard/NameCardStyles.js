import styled from "styled-components";

export const StyledCardContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 3rem 5rem 8rem 5rem;
    border-radius: 13px;
    margin-top: 2rem;
    position: sticky;
    top: 40px;
    max-width: 35rem;

    img {
        width: 240px;
        height: 250px;
        object-fit: cover;
        border-radius: 13px;
    }

    h1 {
        font-family: "Poppins", serif;
        font-weight: 900;
        font-size: 3rem;
        text-align: center;
        white-space: nowrap;
    }

    p {
        font-family: "Poppins", serif;
        font-weight: 600;
        color: #5e5959;
        text-align: center;
        font-size: 1.7rem;
        max-width: 29rem;
    }
`;
