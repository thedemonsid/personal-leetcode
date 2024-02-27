import express from "express";
import "dotenv/config";
import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import connectDB from "./db/index.js";

const app = express();
const port = process.env.PORT;
app.use(express.json());

connectDB();

app.use("/user", userRoutes);
app.use("/blog", blogRoutes);
app.use(function (err, req, res, next) {
  res.status(500).json({ message: `Error in Server : ${err}` });
});

app.listen(port, function () {
  console.log("server Running at port :", { port });
});
