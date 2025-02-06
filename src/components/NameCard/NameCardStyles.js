import styled from "styled-components";

export const StyledCardContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 3rem;
    border-radius: 13px;
    width: 322px;
    margin-top: 2rem;
    padding-bottom: 10rem;

    img {
        width: 196px;
        height: 250px;
        object-fit: cover;
        border-radius: 13px;
    }

    h1 {
        font-family: "Poppins", serif;
        font-weight: 900;
        font-size: 2.5rem;
    }

    p {
        font-family: "Poppins", serif;
        font-weight: 600;
        color: #5e5959;
        text-align: center;
    }
`;
