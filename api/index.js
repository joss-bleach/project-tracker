import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";

import connectDatabase from "./config/db.js";
import userRouter from "./routes/userRoutes.js";

import { notFound, errorHandler } from "./middleware/errorHandler.js";

// Config
dotenv.config();
const app = express();
connectDatabase();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", userRouter);

app.use(notFound);
app.use(errorHandler);

// Start
app.listen(PORT, () => {
  console.log(
    `${process.env.NODE_ENV} server running on port ${process.env.PORT}.`.yellow
      .bold
  );
});
