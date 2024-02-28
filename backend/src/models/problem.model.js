import mongoose from "mongoose";

const problemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: [true, "Difficulty is required"],
    },
    example: [
      {
        input: {
          type: String,
          required: [true, "Input is required"],
        },
        output: {
          type: String,
          required: [true, "Output is required"],
        },
      },
    ],
    note: {
      type: String,
    },
    testCases: [
      {
        input: {
          type: String,
          required: [true, "Test case input is required"],
        },
        expectedOutput: {
          type: String,
          required: [true, "Expected output is required"],
        },
      },
    ],
  },
  { timestamps: true }
);

export const Problem = mongoose.model("Problem", problemSchema);
