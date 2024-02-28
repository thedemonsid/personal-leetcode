import { Problem } from "../models/problem.model.js";

// Get all problems from DB
export async function getAllProblemsController(req, res, next) {
  try {
    const problems = await Problem.find({});
    if (!problems.length) {
      return res.status(200).json({
        success: true,
        message: "No Problems On DB",
      });
    }
    res.status(200).json({
      success: true,
      message: "Successful acquisition of problems",
      problems,
      length: problems.length,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error while getting Problems",
      error,
    });
  }
}

// Create a new problem
export async function createProblemController(req, res, next) {
  try {
    const { title, description, difficulty, example, note } = req.body;
    if (!title || !description || !difficulty || !example) {
      return res.status(400).json({
        success: false,
        message: "Please send all required fields",
      });
    }
    const problem = new Problem({
      title,
      description,
      difficulty,
      example,
      note,
    });
    await problem.save();
    res.status(200).json({
      success: true,
      message: "Successfully created the problem",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while creating Problem",
      error,
    });
  }
}

// Get a specific problem by ID
export async function getProblemController(req, res, next) {
  try {
    const id = req.query.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Please provide the problem id",
      });
    }
    const problem = await Problem.findById(id);
    if (!problem) {
      return res.status(404).json({
        success: false,
        message: "Problem not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Successfully retrieved the problem",
      problem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while retrieving Problem",
      error,
    });
  }
}

// Update a problem
export async function updateProblemController(req, res, next) {
  try {
    const id = req.query.id;
    const { title, description, difficulty, example, note } = req.body;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Please provide the problem id",
      });
    }
    const problem = await Problem.findById(id);
    if (!problem) {
      return res.status(404).json({
        success: false,
        message: "Problem not found",
      });
    }
    problem.title = title;
    problem.description = description;
    problem.difficulty = difficulty;
    problem.example = example;
    problem.note = note;
    await problem.save();
    res.status(200).json({
      success: true,
      message: "Successfully updated the problem",
      problem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while updating Problem",
      error,
    });
  }
}

// Delete a problem
export async function deleteProblemController(req, res, next) {
  try {
    const id = req.query.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Please provide the problem id",
      });
    }
    const problem = await Problem.findByIdAndDelete(id);
    if (!problem) {
      return res.status(404).json({
        success: false,
        message: "Problem not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Successfully deleted the problem",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while deleting Problem",
      error,
    });
  }
}
