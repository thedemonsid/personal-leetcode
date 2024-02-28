import express from "express";
import {
  createProblemController,
  deleteProblemController,
  getAllProblemsController,
  getProblemController,
  updateProblemController,
} from "../controllers/ProblemController.js";
const router = express.Router();

//Get All Problems
router.get("/all-problems", getAllProblemsController);

//Create A Problem
router.post("/create-problem", createProblemController);

//Get Problem
router.get("/get-problem/", getProblemController);

//Update A Problem
router.put("/update-problem/", updateProblemController);

//Delete A Problem
router.delete("/delete-problem/", deleteProblemController);

export default router;
