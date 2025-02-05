import styled from "styled-components";

export const StyledNavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;

    svg {
        color: white;
        height: 2.5rem;
        width: 2.5rem;
        cursor: pointer;
    }

    nav {
        border-radius: 20px;
        background-color: #9d9d9d;
        width: 32rem;
        padding: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`;
