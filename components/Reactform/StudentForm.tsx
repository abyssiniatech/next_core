  "use client"
  import {DevTool} from "@hookform/devtools"
  import {useForm} from "react-hook-form"
//    typescript
interface studentType{
    name:string
    email:string
    password:string
}


const StudentForm = () => {

  const {register, control, handleSubmit, formState: {errors}} = useForm<studentType>({
    defaultValues:{
      name:"surafel",
      email:"sura@gmail.com",
      password: "",
    }
  });
      
  return (
    <div className="flex flex-col items-center w-full  min-h-screen bg-gray-100 rounded mx-auto p-4">
       <form  
          onSubmit={handleSubmit((data) => 
          alert("Successfuly submitted!")
        )}
        className="bg-white text-gray-800 rounded p-4  w-[50%] ">
        <section className="flex flex-col justify-center items-center ">
           <label htmlFor="name" className="block text-xl mb-1">Name:</label> 
           <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded m-2"
            placeholder="enter name"
            id="name"
            {...register("name", {
                required: "name is required",
                minLength: {
                    value: 3,
                    message: "name must be at least 3 characters"
                }
            })}
           />
           {
            errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
           }

            <label htmlFor="email" className="block text-xl mb-1">Email:</label> 
           <input
            type="text"
             className="w-full p-4 border border-gray-300 rounded m-2"
            placeholder="enter name"
            id="email"
            {...register("email", {
                required: "email is required",
                minLength: {
                    value: 3,
                    message: "email must be at least 3 characters"
                }
            })}
           />
           {
            errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
           }

                <label htmlFor="password" className="form-label">Password</label>
                <input  
                    type="password"
                    className="w-full p-4 border border-gray-300 rounded m-2"
                    id="password"
                    placeholder="Password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value:5,
                            message:"Password must be at least five characters"
                        }
                    })}
                />
                {
                    errors.password && <p className="text-red-400 text-sm mt-1">
                        {errors.password.message}
                    </p>
                }
                <button className="bg-teal-800 text-white rounded-md text-white px-4 py-2 text-2xl m-2">Sumbit</button>
          </section>
       
       </form>
          <DevTool control={control} />
    </div>
  )
}

export default StudentForm
