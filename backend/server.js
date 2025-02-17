require("dotenv").config();

const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //parse json requests
app.use(
    cors({
        origin: "https://portfolio-domszilus-projects.vercel.app",
        methods: ["GET,POST"],
        allowedHeaders: "Content-Type",
        credentials: true,
    })
);

app.use("/contact", contactRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
