import express from "express";
// import http from "http";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
import connectDB from "./config/db.js";

//load configrations from .env
dotenv.config();

const app = express();
// console.log(process.env.PORT);
const port = process.env.PORT || 5000;

// connect to mongodb
connectDB();

// const server = http.createServer(app);
// server.listen(port, () => console.log(`Server started on port ${port}`));

app.listen(port, () => console.log(`Server started on port ${port}`));

app.use("/api/users", userRoutes);
app.get("/", (req, res) => res.send("API running!"));

// catch-all-in-one
app.use(notFound);
app.use(errorHandler);
