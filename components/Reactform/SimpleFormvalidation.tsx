 "use client"
import { useState } from "react"
interface Errors {
    password: string
    name: string
    email: string
}
const SimpleFormvalidation = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState<Errors>({ name: "", email: "", password: "" })
    const validateForm = () => {
        let isValid = true
        const newErrors: Errors = {
            name: "", email: "",
            password: ""
        }
        if (!name.trim()) {
            newErrors.name = "Name is required"
            isValid = false
        }
        if (!password.trim()) {
            newErrors.password = "Password is required"
            isValid = false
        }
        if (!email.trim()) {
            newErrors.email = "Email is required"
            isValid = false
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid"
            isValid = false
        }
        setErrors(newErrors)
        return isValid
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (validateForm()) {
            alert("Form submitted successfully!")
            setName("")
            setEmail("")
            setPassword("")
            setErrors({ name: "", email: "", password: "" })
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-indigo-800 text-white">
            <form onSubmit={handleSubmit} className="bg-white text-black p-6 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl mb-4">Simple Form Validation</h2>
                <div className="mb-4">
                    <label className="block mb-1">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full p-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full p-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full p-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded`}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">Submit</button>
            </form>
        </div>
    )
}
export default SimpleFormvalidation