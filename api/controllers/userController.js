import asyncHandler from "express-async-handler";

// Models
import User from "../models/User.js";

// Utils
import generateToken from "../utils/generateToken.js";

// @route - /api/users/
// @desc - POST request to register a new user account
// @access - public
export const registerNewUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExistsInDatabase = await User.findOne({ email });
  if (userExistsInDatabase) {
    res.status(400);
    throw new Error("This email address is linked to another account.");
  }

  const createNewUser = await User.create({
    name,
    email,
    password,
  });

  if (createNewUser) {
    res.status(201).json({
      _id: createNewUser._id,
      name: createNewUser.name,
      email: createNewUser.email,
      token: generateToken(createNewUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Cannot register a new user.");
  }
});

// @route - /api/users/authenticate/
// @desc - POST request to authenticate a user
// @access - public
export const authenticateUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email/password combination.");
  }
});
