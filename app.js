import express from "express";
import dotenv from "dotenv";
import genresRoutes from "./routes/genresRoutes.js";

const app = express();

dotenv.config();

app.use(express.json());
app.use("/genres", genresRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});