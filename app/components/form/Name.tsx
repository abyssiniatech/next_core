//  "use client"

//   import { useForm } from "react-hook-form";
//   interface names{
//     name:string;
//   }

// const Name = () => {
//    const {register,handleSubmit,formState:{errors},}=useForm<names>();

//   const onSubmit=(data:names)=>{
//      console.log(data)
//   }

//   return (
//     <div className="flex flex-col items-center">
//       <form onSubmit={handleSubmit(onSubmit)} className="bg-indigo-600 rounded p-6">
//         <label htmlFor="name">Name:</label>
         
//         <input 
//           {...register("name",{required:"name required"})}
//           id="name"
//           type="text"
//           placeholder="enter name"
//         />
//         {name.errors && <p className="text-red-500">{name.errors.message}</p>}

//         <button type="submit" className="bg-teal-800 text-white px-4 py-2 rounded text-3xl">submit</button>
//       </form>
//     </div>
//   )
// }

// export default Name





"use client";

import { useForm } from "react-hook-form";

interface Names {
  name: string;
}

const Name = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Names>();

  const onSubmit = (data: Names) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input
          {...register("name", { required: "Name required" })}
          id="name"
          type="text"
          placeholder="Enter name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <button type="submit" className="bg-teal-600">add</button>
      </form>
    </div>
  );
};

export default Name;