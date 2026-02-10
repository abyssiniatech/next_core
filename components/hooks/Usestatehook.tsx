   "use client"
import React from 'react'

const Usestatehook = () => {
    const [count, setCount] = React.useState(0)
  return (
    <div className='bg-indigo-800 text-white flex justify-center item-center flex-col rounded w-100 h-16 p-8 '>
      <h1>UseState Hook</h1>
      <p>Count: {count}</p>
      <button className='px-4 py-2 rounded m-2 bg-white text-gray-800' onClick={() => setCount(count + 1)}>Increment</button>

    </div>
  )
}

export default Usestatehook
