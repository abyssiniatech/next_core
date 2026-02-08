
"use client"

import {useState} from "react"


interface CounterProps{
    Count?:number;
    setCount?:()=>void;
    
}

export default function Counter(props:CounterProps){
    const [count,setCount] = useState<number>(0)
    const handleinc=()=>{
        setCount(prev=>prev+1)
    }

    const handledec =() =>{
        setCount(0)
    }
      
    const handleres =() =>{
        setCount(prev => prev-1)
    }
    return
    (
        <div className="text-white">
            
            <p className="text-xl">0</p>
            <div className="flex gap-4">
                <button onClick={handleinc} className="bg-blue-500 text-white px-4 py-2 rounded">Increment</button>
                 <button onClick={handleres} className="bg-gray-500 text-white px-4 py-2 rounded">Reset</button>
                <button onClick={handledec} className="bg-red-500 text-white px-4 py-2 rounded">Decrement</button>
            </div>
        </div>
    )
}
