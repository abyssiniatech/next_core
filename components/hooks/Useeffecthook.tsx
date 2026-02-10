   "use client"

import React, { useEffect } from 'react'
const Useeffecthook = () => {
 const [count, setCount] = React.useState(0)
 useEffect(() => {
  console.log("UseEffect Hook is running");
  setCount(count + 1)
  document.title = `Count: ${count}`
 }, [])
  return (
    <div className='bg-purple-800 text-white flex justify-center item-center flex-col rounded w-100 h-16 p-8 m-8 '>
      <h1>UseEffect Hook</h1>
        <section className='w-full text-center'>
            <p>{count}</p>
            <input type="text" onChange={(e) => setCount(Number(e.target.value))} />
            <button className='px-4 py-2 rounded m-2 bg-white text-gray-800' onClick={() => setCount(count + 1)}>Increment</button>
        </section>
    </div>
  )
}

export default Useeffecthook
