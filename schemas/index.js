import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  name: z.string().min(3, {
    message: "A name sholud be atlest 3 characters",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  club: z.string().min(3, {
    message: "A club sholud be atlest 3 characters",
  }),
  password: z.string().min(6, {
    message: "Password is should be atleast 6 characters",
  }),
});



