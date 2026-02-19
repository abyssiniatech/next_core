  "use client"

import { useState } from "react"

const Usestate = () => {
    const [counter,setCounter] = useState<number>(0);
    // decrement logic
    const handledec =()=>{
        setCounter(prev=>prev-1)
    }

    // reset logic 
    const handleres =()=>{
        setCounter(0)
    }

    // increment logic
    const handleinc =() =>{
        setCounter(prev =>prev+1)
    }
  return (
    <div className="bg-indigo-900 text-white min-h-screen w-100  flex  justify-center items-center ">
       
        <p className="text-pink-900 text-4xl">{counter}</p>

        <button onClick={handledec} className="bg-teal-700 text-white hover:bg-teal-600 active:underline px-4 py-2 text-2xl m-2 rounded">Decrement</button>
        <button onClick={handleres} className="bg-teal-700 text-white hover:bg-teal-600 active:underline px-4 py-2 text-2xl m-2 rounded">Reset</button>
        <button onClick={handleinc} className="bg-teal-700 text-white hover:bg-teal-600 active:underline px-4 py-2 text-2xl m-2 rounded">Increment</button>
    </div>
  )
}

export default Usestate
 