import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import "dotenv/config";
import { User } from "./models/users.model.js";
/* ------------------------------------------ */
const app = express();
const port = process.env.PORT;
app.use(express.json());
const mongoUrl = process.env.MONGODB_URL;
const mongoId = process.env.MONGO_ID;
const privateKey = process.env.PRIVATE_KEY;
/* ----------------------------------------- */
async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(`${mongoUrl}/${mongoId}`);
    console.log(
      "\n Database conected DB HOST :",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("Error while connecting to database : \n", error);
  }
}
connectDB();
/*------------------------------------------
  ------------------------------------------
  ------------------------------------------
  ------------------------------------------
  ------------------------------------------
*/
app.post("/signup", async function (req, res) {
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
/*------------------------------------------
  ------------------------------------------
  ------------------------------------------
  ------------------------------------------
  ------------------------------------------
*/
app.post("/signin", async function (req, res) {
  const { username, password } = req.body;
  const isValidUser = await User.findOne({ username, password });
  if (!isValidUser) {
    return res.status(500).send("Wrong password and Username");
  }
  const token = jwt.sign({ username }, privateKey);
  res.json({ token, message: "Token Created successfully" });
});
/*------------------------------------------
  ------------------------------------------
  ------------------------------------------
  ------------------------------------------
  ------------------------------------------
*/
app.get("/users", async function (req, res) {
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
/*------------------------------------------
  ------------------------------------------
  ------------------------------------------
  ------------------------------------------
  ------------------------------------------
*/
app.use(function (err, req, res, next) {
  res.status(500).json({ message: `Error in Server : ${err}` });
});
/* ---------------------------------------- */
app.listen(port, function () {
  console.log("server Running at port :", { port });
});
