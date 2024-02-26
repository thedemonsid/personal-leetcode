import {
    validateUsername,
    validatePassword,
    validateEmail,
  } from "../../utils/userInputValidation.js";
  
  export function userValidation(req, res, next) {
    const username = req.body.username;
    const usernameValidation = validateUsername(username);
    if (!usernameValidation.success) {
      return res.status(400).json({
        message: "Invalid Username inputs",
        usernameError: usernameValidation.error,
      });
    }
  
    next();
  }
  
  export function emailValidation(req, res, next) {
    const email = req.body.email;
    const emailValidation = validateEmail(email);
    if (!emailValidation.success) {
      return res.status(400).json({
        message: "Invalid Email inputs",
        emailError: emailValidation.error,
      });
    }
  
    next();
  }
  
  export function passwordValidation(req, res, next) {
    const password = req.body.password;
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.success) {
      return res.status(400).json({
        message: "Invalid Password inputs",
        passwordError: passwordValidation.error,
      });
    }
  
    next();
  }