import z from "zod";

const userSchema = z.string().min(2).max(16);
const emailSchema = z.string().email();
const passwordSchema = z.string().min(8).max(16);

export function validateUsername(username) {
  return userSchema.safeParse(username);
}

export function validateEmail(email) {
  return emailSchema.safeParse(email);
}

export function validatePassword(password) {
  return passwordSchema.safeParse(password);
}
