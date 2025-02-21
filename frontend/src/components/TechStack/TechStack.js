import styled from "styled-components";
import { device } from "../../pages/Styles";

export const TechStackCardContainer = styled.div`
    padding-left: 1rem;
    padding-bottom: 3.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    @media ${device.tablet} {
        display: grid;
        grid-template-columns: auto auto;
    }

    button {
        background-color: transparent;
        border: none;
        color: #9d9d9d;
        font-family: "Poppins", serif;
        font-weight: 600;
        width: fit-content;
        cursor: pointer;
        transition: 0.5s;
        position: absolute;
        bottom: 0;
        left: 2rem;

        &:hover {
            color: white;
        }
    }
`;

export const TechStackCard = styled.div`
    font-family: "Poppins", serif;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem 1rem 0.5rem 1rem;
    border-radius: 8px;
    transition: 0.5s;

    &&:hover {
        background-color: rgb(0, 1, 66);
    }

    .card-text-container {
        margin-left: 5px;
        h3 {
            font-weight: 700;
            font-size: 2.5rem;
            color: white;
        }

        p {
            font-weight: 500;
            color: #9d9d9d;
            white-space: nowrap;
        }
    }

    .icon-container {
        svg {
            border-radius: 10px;
            background-color: white;
            padding: 1rem;
            height: 6rem;
            width: 6rem;
        }
    }
`;
