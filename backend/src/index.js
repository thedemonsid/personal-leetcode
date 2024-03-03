import express from "express";
import "dotenv/config";
import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import problemRoutes from "./routes/problemRoutes.js";
import connectDB from "./db/index.js";
import cors from "cors"; //Cross Origin Resource Sharing for devlopment purpose only
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

connectDB();

app.use("/user", userRoutes);
app.use("/blog", blogRoutes);
app.use("/problem", problemRoutes);
app.use(function (err, req, res, next) {
  res.status(500).json({ message: `Error in Server : ${err}` });
});

app.listen(port, function () {
  console.log("server Running at port :", { port });
});
