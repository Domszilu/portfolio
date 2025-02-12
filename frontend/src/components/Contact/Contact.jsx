import React from "react";
import {
    InputGroup,
    StyledButton,
    StyledForm,
    StyledInput,
    StyledLabel,
    StyledTextArea,
} from "./StyledContact.js";
import { DualColumnWrapper, MainHeading, Wrapper } from "../../pages/Styles";
import { useLocation } from "react-router";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import NameCard from "../NameCard/NameCard.jsx";

const Contact = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname !== "/contact" && (
                <>
                    <StyledForm>
                        <MainHeading>
                            Let's work <span>together</span>
                        </MainHeading>
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
                        <StyledButton>Send</StyledButton>
                    </StyledForm>
                </>
            )}
            {location.pathname == "/contact" && (
                <>
                    <NavBar />
                    <Wrapper>
                        <DualColumnWrapper>
                            <Wrapper>
                                <NameCard />
                            </Wrapper>
                            <Wrapper>
                                <StyledForm>
                                    <MainHeading>
                                        Let's work <span>together</span>
                                    </MainHeading>
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
                                    <StyledTextArea
                                        rows={7}
                                        placeholder="Your message"
                                    />
                                    <StyledButton>Send</StyledButton>
                                </StyledForm>
                            </Wrapper>
                        </DualColumnWrapper>
                    </Wrapper>
                    <Footer />
                </>
            )}
        </>
    );
};

export default Contact;
