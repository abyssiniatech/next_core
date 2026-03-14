
   "use client"
import { useRouter } from "next/navigation"
const Contactpage = () => {
const router = useRouter()
     const handleclick=() =>{
      router.push("/")
     }
  return (
    <div className="bg-indigo-900 text-white min-h-screen font-bold flex justify-center items-center">
        <h1>Contact page!</h1>
        <button onClick={handleclick} className="px-4 py-2 bg-pink-700 text-white rounded text-2xl">Go to home</button>
    </div>
  )
}

export default Contactpage
