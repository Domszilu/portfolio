const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/", async (request, response) => {
    const { name, email, message } = request.body;

    if (!name || !email || !message) {
        return response.status(400).json({ error: "Please fill all fields!" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Submission from ${name}`,
            text: message,
            replyTo: email,
        });
        response.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        response.status(500).json({ error: "Failed to send email." });
    }
});

module.exports = router;
