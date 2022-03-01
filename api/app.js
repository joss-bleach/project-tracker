import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

import connectDatabase from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

import { notFound, errorHandler } from "./middleware/errorHandler.js";

// Config
dotenv.config();
const app = express();
connectDatabase();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
