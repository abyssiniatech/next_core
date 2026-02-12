"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  studentSchema,
  StudentFormData,
} from "@/schemas/studentSchema";

const StudentRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
  });

  const onSubmit = async (data: StudentFormData) => {
    console.log("Student Data:", data);
    reset();
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold text-center mb-6">
        Student Registration
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Full Name */}
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            {...register("fullName")}
            className="input"
            placeholder="John Doe"
          />
          <p className="error">{errors.fullName?.message}</p>
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            {...register("email")}
            className="input"
            placeholder="student@email.com"
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium">Password</label>
          <input
            type="password"
            {...register("password")}
            className="input"
          />
          <p className="error">{errors.password?.message}</p>
        </div>

        {/* Age */}
        <div>
          <label className="block font-medium">Age</label>
          <input
            type="number"
            {...register("age", { valueAsNumber: true })}
            className="input"
          />
          <p className="error">{errors.age?.message}</p>
        </div>

        {/* Gender */}
        <div>
          <label className="block font-medium mb-1">Gender</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" value="male" {...register("gender")} />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" value="female" {...register("gender")} />
              Female
            </label>
          </div>
          <p className="error">{errors.gender?.message}</p>
        </div>

        {/* Department */}
        <div>
          <label className="block font-medium">Department</label>
          <select {...register("department")} className="input">
            <option value="">Select department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Information Technology">Information Technology</option>
          </select>
          <p className="error">{errors.department?.message}</p>
        </div>

        {/* Terms */}
        <div className="flex items-center gap-2">
          <input type="checkbox" {...register("agree")} />
          <span>I agree to the terms & conditions</span>
        </div>
        <p className="error">{errors.agree?.message}</p>

        {/* Submit */}
        <button
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {isSubmitting ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default StudentRegistration;
