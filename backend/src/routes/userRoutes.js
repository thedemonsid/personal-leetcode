import express from "express";
import {
  userValidation,
  emailValidation,
  passwordValidation,
} from "../middlewares/inputValidationMiddleware.js";
import { signIn, signUp } from "../middlewares/signMiddleware.js";
const router = express.Router();

router.post(
  "/signup",
  userValidation,
  emailValidation,
  passwordValidation,
  signUp
);
router.post("/signin", userValidation, passwordValidation, signIn);

export default router;
