import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import userRouter from "./routes/userRoutes.js";

// Config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware

// Routes
app.use("/api/users", userRouter);

// Start
app.listen(PORT, () => {
  console.log(
    `${process.env.NODE_ENV} server running on port ${process.env.PORT}.`.yellow
      .bold
  );
});
