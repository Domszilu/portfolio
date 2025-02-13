import React, { useState } from "react";
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
import useContactForm from "../../hooks/useContactForm.js";

const Contact = () => {
    const location = useLocation();
    const { formData, status, handleChange, handleSubmit } = useContactForm();

    return (
        <>
            {location.pathname !== "/contact" && (
                <>
                    <StyledForm onSubmit={handleSubmit}>
                        <MainHeading>
                            Let's work <span>together</span>
                        </MainHeading>
                        <InputGroup>
                            <div>
                                <StyledLabel>Name</StyledLabel>
                                <StyledInput
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <StyledLabel>Email</StyledLabel>
                                <StyledInput
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                        </InputGroup>
                        <StyledLabel>Message</StyledLabel>
                        <StyledTextArea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={7}
                            placeholder="Your message"
                            required
                        />
                        <StyledButton type="submit">Send</StyledButton>
                        {status && <p>{status}</p>}
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
                                <StyledForm onSubmit={handleSubmit}>
                                    <MainHeading>
                                        Let's work <span>together</span>
                                    </MainHeading>
                                    <InputGroup>
                                        <div>
                                            <StyledLabel>Name</StyledLabel>
                                            <StyledInput
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <StyledLabel>Email</StyledLabel>
                                            <StyledInput
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your@email.com"
                                                required
                                            />
                                        </div>
                                    </InputGroup>
                                    <StyledLabel>Message</StyledLabel>
                                    <StyledTextArea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={7}
                                        placeholder="Your message"
                                    />
                                    <StyledButton type="submit">
                                        Send
                                    </StyledButton>
                                    {status && <p>{status}</p>}
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
