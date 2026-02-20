import { useForm } from "react-hook-form";

type LoginForm = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 space-y-4">
      <input
        {...register("email", { required: "Email is required" })}
        className="w-full border p-2"
        placeholder="Email"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input
        type="password"
        {...register("password", { required: "Password is required" })}
        className="w-full border p-2"
        placeholder="Password"
      />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}

      <button className="bg-indigo-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </form>
  );
}