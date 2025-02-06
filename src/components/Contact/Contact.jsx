import React from "react";
import {
    InputGroup,
    StyledForm,
    StyledInput,
    StyledLabel,
    StyledTextArea,
} from "./StyledContact.js";
import { Wrapper } from "../../pages/Styles";

const Contact = () => {
    return (
        <>
            <StyledForm>
                <InputGroup>
                    <div>
                        <StyledLabel>Name</StyledLabel>
                        <StyledInput placeholder="Your name" />
                    </div>
                    <div>
                        <StyledLabel>Email</StyledLabel>
                        <StyledInput placeholder="your@email.com" />
                    </div>
                </InputGroup>
                <StyledLabel>Message</StyledLabel>
                <StyledTextArea />
            </StyledForm>
        </>
    );
};

export default Contact;
