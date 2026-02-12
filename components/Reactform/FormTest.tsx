"use client"

import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

interface FormValues {
  name: string
  email: string
  password: string
}

const FormTest = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })

  const onSubmit = (data: FormValues) => {
    console.log("Submitted data:", data)
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center w-1/2 min-h-screen bg-gray-100 rounded mx-auto p-4"
      >
        <section className="bg-indigo-800 text-white rounded m-2 p-6 w-full">

          {/* Name */}
          <label htmlFor="name" className="block text-xl mb-1">
            Name
          </label>
          <input
            id="name"
            placeholder="Name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters"
              }
            })}
            className="w-full p-3 border rounded-md text-black"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">
              {errors.name.message}
            </p>
          )}

          {/* Email */}
          <label htmlFor="email" className="block text-xl mt-4 mb-1">
            Email
          </label>
          <input
            id="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format"
              }
            })}
            className="w-full p-3 border rounded-md text-black"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">
              {errors.email.message}
            </p>
          )}

          {/* Password */}
          <label htmlFor="password" className="block text-xl mt-4 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })}
            className="w-full p-3 border rounded-md text-black"
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">
              {errors.password.message}
              
            </p>
          )}

          <button
            type="submit"
            className="bg-pink-900 text-white px-6 py-2 rounded-lg text-xl mt-6"
          >
            Submit
          </button>

        </section>
      </form>

      <DevTool control={control} />
    </div>
  )
}

export default FormTest
