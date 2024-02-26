import express from "express";
import { User } from "../models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const saltRounds = 10;
const router = express.Router();
const privateKey = process.env.PRIVATE_KEY;

// Sign up for user
router.post("/signup", async function (req, res) {
  const { username, email, password } = req.body;
  const existingUser = await User.findOne({ username: username, email: email });
  if (!existingUser) {
    try {
      const hash = bcrypt.hashSync(password, saltRounds);
      const user = new User({ username, email, password: hash });
      await user.save();
      res.send(`New User signed In : ${username}`);
    } catch (error) {
      console.log("Error at signup", error);
      return res.status(400).json({
        message: "Wrong inputs password(8-16) username(2-16) email",
      });
    }
  } else {
    res.status(404).json({ message: "User with this username Already exists" });
  }
});

//Sign in for user
router.post("/signin", async function (req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(500).send("Wrong username");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(500).send("Wrong password");
  }
  const token = jwt.sign({ username }, privateKey);
  res.json({ token, message: "Token Created successfully" });
});

// Export the router
export default router;
