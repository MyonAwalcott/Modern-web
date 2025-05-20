import express from "express";
import lab_router from "./routers/lab_router.js";


// Create an instance of express
const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`open site on : http://localhost:${PORT}`);
});


app.use('/lab2', lab_router);