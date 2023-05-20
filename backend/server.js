import express from "express";
// import http from "http";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
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

//req data parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  // serve the static files from the frontend/dist ( if use create-react-app then the path is "frontend/build")
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  //   console.log(__dirname);

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

// catch errors all-in-one
app.use(notFound);
app.use(errorHandler);
