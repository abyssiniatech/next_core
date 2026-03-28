   "use client"
import Card from "../components/card/Card";
import { useRouter } from "next/navigation"

const page = async() => {
  // loading state with
   await new Promise((resolve) => setTimeout(resolve, 2000));

  const router = useRouter()
  const handleclick=() =>{
    router.push("/")
  }
  return (
    <div className="min-h-screen flex ">
    <Card />
    <button onClick={handleclick} className="px-4 py-2 bg-pink-700 text-white rounded text-2xl">Go to home</button>
    </div>
  )
};

export default page;