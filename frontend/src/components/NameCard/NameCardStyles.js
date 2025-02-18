import styled from "styled-components";
import { device } from "../../pages/Styles";

export const StyledCardContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding: 3rem 1rem 2.5rem 1rem;
    margin-top: 5rem;
    border-radius: 13px;
    position: sticky;
    top: 45px;
    /* width: 34rem; */
    width: clamp(30rem, 50vw, 34rem);
    @media ${device.tablet} {
        margin-top: 11rem;
    }

    img {
        width: 240px;
        height: 250px;
        object-fit: cover;
        border-radius: 13px;
    }

    h1 {
        font-family: "Poppins", serif;
        font-weight: 900;
        font-size: 2.9rem;
        text-align: center;
        white-space: nowrap;
    }

    p {
        font-family: "Poppins", serif;
        font-weight: 600;
        color: #5e5959;
        text-align: center;
        font-size: 1.6rem;
    }

    .card-icons-container {
        width: 70%;
        display: flex;
        justify-content: space-evenly;
        margin-top: 1rem;

        svg {
            height: 4.3rem;
            width: 4.3rem;
            cursor: pointer;
            color: rgb(234, 116, 116);
            transition: 0.5s;
            padding: 0.8rem;
            border-radius: 8px;
            &:hover {
                background-color: rgb(241, 241, 241);
            }
        }
    }
`;
