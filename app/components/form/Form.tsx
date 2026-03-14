import { useForm } from "react-hook-form";

interface formsprop{
    name:string,
    email:string,
    password:string,
}

const Form = () => {
    const {register,handleSubmit,formState:{errors},
    } =useForm<formsprop>()
    const onSubmit=(state:formsprop)=>{
        console.log(state)
    }
  return (
    <div className="flex min-h-screen flex items-center flex-col gap-4 bg-slate-800 text-white p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="rounded mx-auto border border-gray-400">
            <label htmlFor="name">Name:</label>
            <input
            {...register("name",{required:"Name is required"})}
            type="text"
            className="p-2 m-2 rounded"
             />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            <label htmlFor="email">Email:</label>
            <input type="email" 
            {...register("email",{required:"email is required"})}
             className="p-2 m-2 rounded"
            />
             {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <label htmlFor="Password">Password:</label>
            <input type="password"
            {...register("password",{required:"Password is required"})}
            className="p-2 m-2 rounded"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            <button className="bg-indigo-300 px-4 py-2 rounded mt-4 ">Add</button>
        </form>
    </div>
  )
};

export default Form;