  "use client"
import {useForm} from 'react-hook-form';
const Reacthookform = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const messsage = "file is submitted"
    return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
        <form onSubmit={handleSubmit((data) => alert(JSON.stringify({...data, message: messsage})))}>
            <input className='w-full p-4 rounded' {...register("firstName", { required: true })} placeholder="First Name" />
            {errors.firstName && <span className="text-red-500">First Name is required</span>}
            <input className='w-full p-4 rounded mt-2' {...register("lastName", { required: true })} placeholder="Last Name" />
            {errors.lastName && <span className="text-red-500">Last Name is required</span>}
            <input  type="submit" value="Submit" className="bg-blue-500 text-white px-4 py-2 rounded" />
        </form>
    </div>
  )
}

export default Reacthookform
