//  This is a simple React form component styled with Tailwind CSS. It includes two input fields for name and email, and a submit button. The form is centered on the page with a dark background.
// This line indicates that the component is a client-side component in Next.js, allowing it to use React features like state and effects.
  // simple form components by using react useState and useEffect hooks to manage form state and handle form submission. The form includes two input fields for name and email, and a submit button. The form is styled using Tailwind CSS classes for a modern look.
  "use client"
import { useState } from "react"

interface Errors {
  password: string
  name: string
  email: string

}

const SimpleForm = () => {
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
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded shadow-md w-full max-w-sm"
      >
        <label htmlFor="name">Name</label>
        <input
          className="w-full p-2 bg-gray-800 text-white rounded"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

        <label htmlFor="email" className="block mt-3">Email</label>
        <input
          className="w-full p-2 bg-gray-800 text-white rounded"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
        <label htmlFor="password" className="block mt-3">Password</label>

        <input
          className="w-full p-2 bg-gray-800 text-white rounded"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="text-red-400 text-sm">{errors.password}</p>}

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default SimpleForm
