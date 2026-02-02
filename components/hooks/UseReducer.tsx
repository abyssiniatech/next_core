     "use client";


// usereducer hook counter app
import React, { useReducer } from 'react'
const initialState = 0
const reducer = (state: number, action: { type: string }) => {
  switch (action.type) {
    case 'increment':
        return state + 1
    case 'decrement':
        return state - 1
    case 'reset':
        return initialState
    default:
        return state
    }
}
const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
    <div className='text-center my-5'>
        <h2 className='text-2xl font-bold'>Count : {count}</h2>

        <div className='flex justify-center space-x-4 mt-4'>
            <button className='bg-green-500 text-white px-4 py-2 rounded' onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button className='bg-gray-500 text-white px-4 py-2 rounded' onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    </div>
    )
}
export default UseReducer
