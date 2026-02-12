   "use client"
import {useForm} from "react-hook-form"
interface emailForm{
    email:string
}

const EmailForm = () => {
    const{handleSubmit,register,formState:{errors}} = useForm<emailForm>()
    const onSubmit = (data:emailForm) =>{
        console.log(data)
    }
    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="email"
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Invalid email format",
                    },
                })}
            />
            {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
            )}
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default EmailForm
