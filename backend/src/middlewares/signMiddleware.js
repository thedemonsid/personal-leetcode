import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/users.model.js";
const privateKey = process.env.PRIVATE_KEY;

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const existingUser = await User.findOne({ username, email });

  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User with this username Already exists" });
  }

  try {
    const hash = bcrypt.hashSync(password, 10);
    const user = new User({ username, email, password: hash });
    await user.save();
    res.send(`New User signed In : ${username}`);
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).send("Incorrect Username");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(400).send("Incorrect password");
  }

  const token = jwt.sign({ username }, privateKey);
  res.json({ token, message: "Token Created successfully" });
};
