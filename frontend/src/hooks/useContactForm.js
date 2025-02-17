import { useState } from "react";

const useContactForm = () => {
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
            const response = await fetch(
                "https://portfolio-x43k.onrender.com/contact",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                }
            );

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

    return { formData, status, handleChange, handleSubmit };
};

export default useContactForm;
