 "use client"
  import {useForm} from "react-hook-form"
 interface forms{
    password:string;
 }

const Password = () => {
   const {register,handleSubmit,formState:{errors},}=useForm<forms>()
   const onSubmit= (data:forms)=>{
      console.log(data)
   }
  return (
    <div>
     <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email:</label>
      <input
      {...register("email",{required:"Email required"})}
       type="email"
        id="email"
        placeholder="enter email"
        className="p-4 border border-gray-300 mx-auto"
    />
    {errors.email &&(<p className="text-red-500">{errors.email.message}</p>)}
       <div>
         <button type="Submit" className="bg-teal-700 text-white px-4 py-2 rounded">Add</button>
       </div>
     </form>
    </div>
  )
}

export default Password
