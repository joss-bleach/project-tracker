// Services
import { createNewUser } from "../services/userServices.js";

export const postCreateUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    await createNewUser(name, email, password);
    res.status(201);
    next();
  } catch (err) {
    console.log(err.message);
    res.status(500) && next(error);
  }
};
