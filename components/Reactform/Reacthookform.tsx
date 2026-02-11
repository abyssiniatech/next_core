"use client"

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Reacthookform = () => {
  const { register, handleSubmit, formState: { errors }, control } = useForm();
  const message = "file is submitted";

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-center text-2xl">React Hook Form</h1>
      <form onSubmit={handleSubmit((data) => alert(JSON.stringify({ ...data, message })))}>
        <input
          className="w-full p-4 rounded"
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        {errors.firstName && <span className="text-red-500">First Name is required</span>}

        <input
          className="w-full p-4 rounded mt-2"
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        />
        {errors.lastName && <span className="text-red-500">Last Name is required</span>}

        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        />
      </form>

      <DevTool control={control} />
    </div>
  );
};

export default Reacthookform;
