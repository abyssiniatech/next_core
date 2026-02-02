  "use client"

import React, { useEffect } from 'react'
import { useState } from 'react';

const Useeffect = () => {
    const [counter,setCounter] = useState<number>(0)
    const handleinc=()=>{

            setCounter(counter+1)
        }
    useEffect(()=>{
       setTimeout(()=>{
        document.title=`hello surafel : ${counter}`
      
       },2000)
    },[counter])
      
  return (
    <div>
        <p>{counter}</p>
        <button onClick={handleinc} className="bg-pink-700 text-white rounded px-4 py-2">+</button>
    </div>
  )
}

export default Useeffect
