"use client";

import { useForm } from "react-hook-form";

type FormData = {
  name: string;
};

export default function NameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow"
    >
      <label className="block mb-2 font-medium text-gray-700">
        Full Name
      </label>

      <input
        type="text"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters",
          },
          pattern: {
            value: /^[A-Za-z\s]+$/,
            message: "Name should contain only letters",
          },
        })}
      />

      {errors.name && (
        <p className="mt-1 text-sm text-red-600">
          {errors.name.message}
        </p>
      )}

      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
