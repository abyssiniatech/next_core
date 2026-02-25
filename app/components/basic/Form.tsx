    "use client"

   import {useForm}  from "react-hook-form"
interface info{
    name:string;
    email:string
    Password:string
   }


const Form = () => {
   const  {register,handleSubmit,formState:{errors},} = useForm<info>()
   const onSubmit=(data:info)=>{
    console.log(data)
   }
  return (
    <div className="bg-indigo-800 text-white min-h-screen flex justify-center items-center ">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-indigo-700 text-white flex flex-col items-center justify-center p-4 m-2  rounded">
        <label htmlFor="name">Name:</label>
          <input 
          {...register("name",{required:"Name is required!"})}
          type="text"
          id="name"
         placeholder="add name"
         className="bg-gray-50 mx-auto  border border-gray-400 p-2 text-gray-800"
          />
         {errors.name && (<p className="text-red-500">{errors.name.message}</p>)}
           <label htmlFor="email">Email:</label>
          <input 
          {...register("email",{required:"email is required!"})}
          type="email"
          id="email"
         placeholder="add email"
         className="bg-gray-50 mx-auto  border border-gray-400 p-2 text-gray-800"
          />
            {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}
           <label htmlFor="password">Password:</label>
          <input 
          {...register("Password",{required:"Password is required!"})}
          type="password"
          id="password"
         placeholder="add password"
         className="bg-gray-50 mx-auto  border border-gray-400 p-2 text-gray-800"
          />
          {errors.Password && (<p className="text-red-500">{errors.Password.message}</p>)}
          <button type="submit" className="bg-pink-700 text-white rounded mx-auto mt-4 px-4 py-2 ">Add</button>
      </form>
    </div>
  )
}

export default Form
