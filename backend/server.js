import express from "express";
// import http from "http";
import dotenv from "dotenv";

//load configrations from .env
dotenv.config();

const app = express();
// console.log(process.env.PORT);
const port = process.env.PORT || 5000;

// const server = http.createServer(app);
// server.listen(port, () => console.log(`Server started on port ${port}`));

app.listen(port, () => console.log(`Server started on port ${port}`));

app.get("/", (req, res) => res.send("API running!"));
