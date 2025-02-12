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

const Contact = () => {
    const location = useLocation();

    // state to store form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // state for success/error message
    const [status, setStatus] = useState(null);

    // handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" }); // Clear form
            } else {
                setStatus(result.error || "Failed to send message.");
            }
        } catch (error) {
            setStatus("An error occurred. Please try again.");
        }
    };

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
