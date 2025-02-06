import styled from "styled-components";

export const StyledForm = styled.form`
    width: 100%;
    max-width: 500px;
    color: #dbc6c6;
    margin: auto;
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
    margin-bottom: 1rem;
`;

export const StyledTextArea = styled.textarea`
    width: 100%;
`;
