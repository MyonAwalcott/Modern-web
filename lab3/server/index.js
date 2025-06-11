// /server/index.js
import express from "express";
import cors from "cors";
import save_router from "./routers/save_router.js";
import fetch_router from "./routers/fetch_router.js";

// Get __dirname equivalent
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routing
app.use("/save", save_router);
app.use("/fetch", fetch_router);

app.get("/", (req, res) => {
    res.json({ message: "hello from the server" });
});

app.use("", (req, res) => {
    res.status(404).send("404 Page Not Found");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
