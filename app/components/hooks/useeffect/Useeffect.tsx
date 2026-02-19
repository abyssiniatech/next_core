   "use client"
import { useEffect, useState } from "react"


const Useeffect = () => {
    const [counter,setCounter] =useState(0)
    useEffect(()=>{
        setTimeout(()=>{
          document.title =` ${counter} Times renderd`
        },3000)
 
    },[counter])
  return (
    <div>
      <button onClick={()=>setCounter(counter+1)}
        className="bg-green-700 px-4 py-2 rounded-lg text-white"
        >{counter} times render</button>
    </div>
  )
}

export default Useeffect
