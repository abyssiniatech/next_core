 "use client"

  import { useForm } from "react-hook-form";
  interface names{
    name:string;
  }

const Name = () => {
   const {register,handleSubmit,formState:{errors},}=useForm<names>();

  const onSubmit=(data:names)=>{
     console.log(data)
  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-indigo-600 rounded p-6">
        <label htmlFor="name">Name:</label>
         
        <input 
          {...register("name",{required:"name required"})}
          id="name"
          type="text"
          placeholder="enter name"
        />
        { errors.name && (<p className="text-red-500">{errors.name.message}</p>)}

        <button type="submit" className="bg-teal-800 text-white px-4 py-2 rounded ">submit</button>
      </form>
    </div>
  )
}

export default Name



