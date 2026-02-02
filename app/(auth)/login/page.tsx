  "use client"
import {useState} from "react"

export default function(){
 const [count, setCount] = useState<number>(0)
   const handleIncrement=()=>{
      setCount(count+1)
   } 
 return (
    <div>
      <p>login page {count}</p>
      <button onClick={handleIncrement} className="bg-pink-700 text-white border-0 px-4 py-2 rounded text-3xl">Increment</button>
    </div>
    )
}