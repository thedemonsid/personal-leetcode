import express from "express";
import { User } from "../models/users.model.js";
const router = express.Router();
const privateKey = process.env.PRIVATE_KEY;

router.post("/signup", async function (req, res) {
  const { username, email, password } = req.body;
  const existingUser = await User.findOne({ username: username, email: email });
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
    res.status(404).json({ message: "User with this username Already exists" });
  }
});

router.post("/signin", async function (req, res) {
  const { username, password } = req.body;
  const isValidUser = await User.findOne({ username, password });
  if (!isValidUser) {
    return res.status(500).send("Wrong password and Username");
  }
  const token = jwt.sign({ username }, privateKey);
  res.json({ token, message: "Token Created successfully" });
});

router.get("/users", async function (req, res) {
  const authHeader = req.headers["authorization"];
  try {
    const decoded = jwt.verify(authHeader, privateKey);
    const isValidUser = await User.findOne({ username: decoded.username });
    if (isValidUser) {
      return res.send(isValidUser);
    } else {
      res.status(404).send("Invalid token, Please Sign In ");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error at server on /users");
  }
});

// Export the router
export default router;
