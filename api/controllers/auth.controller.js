import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { userName, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 12);
  const newUser = new User({ userName, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({
      message: "User created successfully!",
    });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validateUser = await User.findOne({ email });
    if (!validateUser) return errorHandler(404, "User not found!");

    const validatePassword = bcryptjs.compareSync(
      password,
      validateUser.password
    );
    if (!validatePassword) return errorHandler(401, "Wrong credentials!");

    const token = jwt.sign(
      { userId: validateUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    const { password: hashedPassword, ...rest } = validateUser._doc;

    res
      .cookie("access_token", token, { httpOnly: true, maxAge: 3600000 })
      .status(200)
      .json({ rest });
  } catch (error) {
    next(error);
  }
};
