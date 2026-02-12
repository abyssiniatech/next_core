import { z } from "zod";

export const studentSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),

  email: z.string().email("Invalid email address"),

  password: z.string().min(8, "Password must be at least 8 characters"),

  age: z
    .number()
    .min(18, "Must be at least 18 years old")
    .refine((val) => val !== undefined && val !== null, {
      message: "Age is required",
    }),

  gender: z.enum(["male", "female"], {
    required_error: "Gender is required",
  }),

  department: z.string().min(1, "Department is required"),

  agree: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" }),
  }),
});

export type StudentFormData = z.infer<typeof studentSchema>;
