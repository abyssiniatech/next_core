import React, { useRef } from 'react'

const Useref = () => {
    const inputRef=useRef<HTMLInputElement>(null)
  return (
    <div className='m-4 p-4 border-2 border-blue-400'>
        <form className='flex flex-col space-y-4'>
          <input className='border-2 border-gray-300 p-2 rounded-md' type="text" ref={inputRef} />
          <button onClick={() => inputRef.current?.focus()}>Focus</button>
        </form>
    </div>
  )
}

export default Useref
