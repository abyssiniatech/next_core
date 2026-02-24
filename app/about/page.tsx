   "use client"
import  Image from "next/image"
import { useForm } from "react-hook-form"

interface forms{
  name:string
  email:string
  password:string
}
const AboutPage
 = () => {
  const {register,handleSubmit,formState:{errors},} = useForm<forms>();
  const onSubmit=(data:forms)=>{
    console.log(data);
  }
  return (
    <div className=" flex items-center justify-between p-4 bg-indigo-900 text-bold  text-white min-h-screen">
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-[40%] m-2">
          <label htmlFor="name">Name:</label>
          <input 
           {...register("name",{required:"name is required!"})}
          type="text" 
          placeholder="Add name.."
          className="bg-indigo-600 text-white w-full rounded border border-white text-white "
          
          
          />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}

            <label htmlFor="email">Email:</label>
          <input 
           {...register("email",{required:"email is required!"})}
          type="email" 
          placeholder="Add email.."
          className="bg-indigo-600 text-white w-full rounded border border-white text-white "
          
          
          />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <label htmlFor="password">Password:</label>
          <input 
           {...register("password",{required:"Password is required!"})}
          type="password" 
          placeholder="Add name.."
          className="bg-indigo-600 text-white w-full rounded border border-white text-white "
          
          
          />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </form>
    </div>
    <Image src="/surafel.JPG"
    alt="no image here"
   width={200}
   height={200}
    className="rounded-full"
    />

    </div>
  )
}

export default AboutPage

