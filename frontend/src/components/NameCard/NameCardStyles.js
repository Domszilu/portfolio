import styled from "styled-components";

export const StyledCardContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 3rem 0rem 8rem 0rem;
    margin-top: 11rem;
    border-radius: 13px;
    position: sticky;
    top: 45px;
    width: 34rem;

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
    }
`;
