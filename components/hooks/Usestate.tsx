  "use client"
  import { useState } from "react"
export default function Counter(){
    const [count,setCount] = useState<number>(0)
    // incremnet logic here
    const handleinc=()=>{
          setCount(prev=>prev+1)
    }
    //   reset logic 
    const handleres=()=>{
        setCount(0)
    }
    // decrement logic
    const handledec =() =>{
        setCount(prev =>prev-1)
    }
    return(
        <div className="flex justify-center items-center gap-4 p-4 gap-4 min-h-screen flex-col text-white bg-indigo-900">
             <p className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl text-pink-800 bg-gray-100 font-bold p-10 shadow-lg ">{count}</p>
             <section className="flex items-center justify-center gap-4  text-white ">
                <button onClick={handleinc} className="bg-teal-800 text-white rounded px-4 py-2 text-2xl">Increment</button>
                <button onClick={handleres} className="bg-teal-800 text-white rounded px-4 py-2 text-2xl">Reset</button>
                <button onClick={handledec} className="bg-teal-800 text-white rounded px-4 py-2 text-2xl">Decremnet</button>
             </section>
        </div>
    )
}