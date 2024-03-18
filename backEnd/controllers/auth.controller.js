import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

// SignUp Post
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ mesasge: "user created successfully" });
  } catch (error) {
    next(error);
  }
};
// Login P
export const Login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not Found"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(403, "Wrong Credentials"));
    // JWT Token
    const token = jwt.sign({ _id: validUser._id }, process.env.JWT_SECRET);
    // We dont share Pasword to token
    const { password: hashedPassword, ...rest } = validUser._doc;
    //Cookie  Expires in 1 hour
    const expiryDate = new Date(Date.now() + 3600000);
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

// Google Auth
export const google = async (req, res, next) => {
  try {
     const user = await User.findOne({ email: req.body.email });
     if (user) {
       // JWT Token
       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
       // We dont share Pasword to token
       const { password: hashedPassword, ...rest } = user._doc;
       //Cookie Expires in 1 hour
       const expiryDate = new Date(Date.now() + 3600000);
       res
         .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
         .status(200)
         .json(rest);
     } else {
       const generatedPassword =
         Math.random().toString(36).slice(-8) +
         Math.random().toString(36).slice(-8);
       const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
       const newUser = new User({
         username:
           req.body.name.split(" ").join("").toLowerCase() +
           Math.random().toString(36).slice(-8),
         email: req.body.email,
         password: hashedPassword, 
         profilePicture: req.body.photo,
       });
       await newUser.save();
       // JWT Token
       const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET); 
       // We dont share Pasword to token
       const { password: hashedPassword2, ...rest } = newUser._doc; 
       //Cookie Expires in 1 hour
       const expiryDate = new Date(Date.now() + 3600000);
       res
         .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
         .status(200)
         .json(rest);
     }
  } catch (error) {
     next(error);
  }
 };
 
 export const signOut = (req,res) =>{
  res.clearCookie('access_token').status(200).json('Signout success!')
 }
