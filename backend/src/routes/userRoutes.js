import express from "express";
import { User } from "../models/users.model.js";
import {
  userValidation,
  emailValidation,
  passwordValidation,
} from "../middlewares/userInputValidation/usermiddleware.js";
const router = express.Router();
const privateKey = process.env.PRIVATE_KEY;

// Sign up for user
router.post(
  "/signup",
  userValidation,
  emailValidation,
  passwordValidation,
  async function (req, res) {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({
      username: username,
      email: email,
    });
    if (!existingUser) {
      try {
        const user = new User({ username, email, password });
        await user.save();
        res.send(`New User signed In : ${username}`);
      } catch (error) {
        console.log("Error at signup", error);
        return res.status(404).json({
          message: "Wrong inputs password(8-16) username(2-16) email",
        });
      }
    } else {
      res
        .status(404)
        .json({ message: "User with this username Already exists" });
    }
  }
);

//Sign in for user
router.post(
  "/signin",
  userValidation,
  passwordValidation,
  async function (req, res) {
    const { username, password } = req.body;
    const isValidUser = await User.findOne({ username, password });
    if (!isValidUser) {
      return res.status(500).send("Wrong password and Username");
    }
    const token = jwt.sign({ username }, privateKey);
    res.json({ token, message: "Token Created successfully" });
  }
);

// Export the router
export default router;
