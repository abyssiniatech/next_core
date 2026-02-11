"use client";

import { useForm } from "react-hook-form";

interface FormData  {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  country: string;
  bio: string;
  terms: boolean;
};

export default function ProfessionalForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const password = watch("password");

  const onSubmit = async (data: FormData) => {
    console.log("Submitted Data:", data);
    alert("Form submitted successfully ✅");
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl bg-white p-8 rounded-xl shadow-lg space-y-5"
      >
        <h1 className="text-2xl font-bold text-center">
          Professional Registration Form
        </h1>

        <div>
          <label className="block font-medium">Full Name</label>
          <input
            className="input"
            {...register("fullName", {
              required: "Full name is required",
              minLength: {
                value: 3,
                message: "Minimum 3 characters",
              },
            })}
          />
          <p className="error">{errors.fullName?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Username</label>
          <input
            className="input"
            {...register("username", {
              required: "Username is required",
              pattern: {
                value: /^[a-zA-Z0-9_]+$/,
                message: "Only letters, numbers, underscore",
              },
            })}
          />
          <p className="error">{errors.username?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            className="input"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email format",
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Password</label>
          <input
            type="password"
            className="input"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "At least 6 characters",
              },
            })}
          />
          <p className="error">{errors.password?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Confirm Password</label>
          <input
            type="password"
            className="input"
            {...register("confirmPassword", {
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          <p className="error">{errors.confirmPassword?.message}</p>
        </div>

        <div>
          <label className="block font-medium mb-1">Gender</label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                value="male"
                {...register("gender", { required: "Select gender" })}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                {...register("gender")}
              />{" "}
              Female
            </label>
          </div>
          <p className="error">{errors.gender?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Country</label>
          <select
            className="input"
            {...register("country", { required: "Select a country" })}
          >
            <option value="">Select</option>
            <option value="ethiopia">Ethiopia</option>
            <option value="kenya">Kenya</option>
            <option value="germany">Germany</option>
          </select>
          <p className="error">{errors.country?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Bio</label>
          <textarea
            className="input h-24"
            {...register("bio", {
              maxLength: {
                value: 150,
                message: "Max 150 characters",
              },
            })}
          />
          <p className="error">{errors.bio?.message}</p>
        </div>

      
        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register("terms", {
                required: "You must accept terms",
              })}
            />
            <p className="ml-2 text-green-700">I agree to terms and conditions</p>
          </label>
          <p className="error">{errors.terms?.message}</p>
        </div>

        <button
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

     
      <style jsx global>{`
        .input {
          width: 100%;
          padding: 0.5rem 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
        }
        .error {
          color: #ef4444;
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
}
