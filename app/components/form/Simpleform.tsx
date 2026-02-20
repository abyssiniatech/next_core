
"use client";

import { useForm } from "react-hook-form";

interface FormValidate {
  name: string;
  email: string;
  password: string;
}

const Simpleform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValidate>();

  const onSubmit = (data: FormValidate) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <section>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            placeholder="Enter your name"
            className="border p-2 w-full"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </section>

        <section>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Enter your email"
            className="border p-2 w-full"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </section>

        <section>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Enter password"
            className="border p-2 w-full"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </section>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>

      </form>
    </div>
  );
};

export default Simpleform;
