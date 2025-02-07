import styled from "styled-components";

export const StyledForm = styled.form`
    width: 100%;
    max-width: 65rem;
    color: #dbc6c6;
    display: flex;
    flex-direction: column;
`;

export const InputGroup = styled.div`
    display: flex;
    gap: 2rem;
    width: 100%;

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const StyledLabel = styled.label`
    font-family: "Poppins", serif;
    font-weight: 500;
    font-size: 1.3rem;
    padding-bottom: 5px;
`;

export const StyledInput = styled.input`
    border-radius: 8px;
    padding: 12px;
    width: 100%;
    border: none;
    margin-bottom: 2.5rem;
    &&::placeholder {
        font-family: "Poppins", serif;
        font-weight: 400;
    }
`;

export const StyledTextArea = styled.textarea`
    border-radius: 8px;
    width: 100%;
    padding: 12px;
    margin-bottom: 2.5rem;

    &&::placeholder {
        font-family: "Poppins", serif;
        font-weight: 400;
    }
`;

export const StyledButton = styled.button`
    width: 100%;
    font-family: "Poppins", serif;
    font-weight: 600;
    font-size: 1.6rem;
    border-radius: 8px;
    color: white;
    background-color: #f16d6d;
    border: none;
    padding: 1.2rem;
    cursor: pointer;
    transition: 0.5s;
    margin-top: 1.5rem;

    &&:hover {
        background-color: rgb(199, 87, 87);
    }
`;
