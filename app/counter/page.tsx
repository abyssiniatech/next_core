"use client"


import {useState} from "react"
import {useRouter} from "next/navigation"

export default function page(){
    const [count, setCount] = useState<number>(0);
    const router=useRouter()
    const  handleclick =() =>{
        router.push("/")
    }
    const handleinc = () => {
        setCount(prev => prev + 1);
    };

    const handledec = () => {
        setCount(prev => prev - 1);
    };

    const handleres = () => {
        setCount(0);
    };
  
    return (
        <div className="text-white min-h-screen flex flex-col flex-col items-center justify-center gap-4">
            <p className="text-xl">{count}</p>
            <div className="flex gap-4">
                <button onClick={handleinc} className="bg-blue-500 text-white px-4 py-2 rounded">Increment</button>
                <button onClick={handleres} className="bg-gray-500 text-white px-4 py-2 rounded">Reset</button>
                <button onClick={handledec} className="bg-red-500 text-white px-4 py-2 rounded">Decrement</button>
            </div>
             <section className="bg-indigo-700 w-100 h-80 rounded py-10 px-4 flex items-center justify-center">
                <button className="bg-pink-800 text-white px-4 py-2 rounded" onClick={handleclick}>Go to home page</button>
             </section>
        </div>
    );
}
