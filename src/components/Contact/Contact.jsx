import React from "react";
import {
    InputGroup,
    StyledForm,
    StyledInput,
    StyledLabel,
    StyledTextArea,
} from "./StyledContact.js";
import { MainHeading, Wrapper } from "../../pages/Styles";

const Contact = () => {
    return (
        <>
            <MainHeading>
                Let's work <span>together</span>
            </MainHeading>
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
                <StyledTextArea rows={7} placeholder="Your message" />
            </StyledForm>
        </>
    );
};

export default Contact;
