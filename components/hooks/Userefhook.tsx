   "use client"
import React from 'react'

const Userefhook = () => {
    const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div className='p-30 mt-4 text-white border border-gray-100 rounded'>
        <h1 className='text-gray-800'>useref hooks</h1>
      <input ref={inputRef} type="text" placeholder="Focus me!" className="p-4 w-full border-gray-400 m-2 "/>
      <button onClick={() => inputRef.current?.focus()} className='bg-green-700 text-white px-4 py-2 rounded m-2'>Focus Input</button>
    </div>
  )
}

export default Userefhook
