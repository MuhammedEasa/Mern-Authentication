import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcyrptjs from "bcryptjs";
export const test = (req, res) => {
  res.json({
    message: "Testing API",
  });
};

// Update User
export const updateUser = async (req, res, next) => {
  if (req.user._id !== req.params.id) {
    return next(errorHandler(401, "You can Update Only Your Account"));
  }
  try {
    if (req.body.password) {
      req.body.password = bcyrptjs.hashSync(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

// Delete User
export const deleteUser = async (req, res, next) => {
  if (!req.user._id && !req.user.id) {
    return next(errorHandler(401, "User ID not found"));
  }

  const userId = req.user._id || req.user.id;

  if (userId !== req.params.id) {
    return next(errorHandler(401, "You can only delete your own account"));
  }

  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json("User has been deleted...");
  } catch (error) {
    next(error);
  }
};

// Admin Page User listing

export const adminUser = async (req, res) => {
  // Get all users from the database
  const users = await User.find();
  res.status(200).json(users);
};

// Admin Create User
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Create a new user object
    const newUser = new User({ username: name, email, password });
    // Save the user to the database
    await newUser.save();
    // Respond with the created user
    res.status(201).json(newUser);
  } catch (error) {
    // If an error occurs, respond with an error status and message
    console.error("Error creating user:", error);
    res.status(500).json("Internal server error");
  }
};
