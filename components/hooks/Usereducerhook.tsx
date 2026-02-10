   "use client"

import React from "react";


const initialState = 0;
  const reducer = (state:any, action:any) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
             return initialState;
        default:
            return state;
    }
}

const Usereducerhook = () => {
     const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div className='p-30 mt-4 text-white border border-gray-100 rounded'>
        <h1 className='text-gray-800'>UseReducer Hook</h1>
        <p className='text-gray-600'>This is a simple example of using the useReducer hook to manage state in a React component. The useReducer hook is an alternative to the useState hook and is useful for managing more complex state logic.</p>
        <p className='text-gray-600'>In this example, we have a counter that can be incremented, decremented, or reset to its initial value. The reducer function defines how the state should change based on the dispatched action.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <button onClick={() => dispatch({ type: 'increment' })} className="bg-blue-500 text-white px-4 py-2 rounded">Increment</button>
          <button onClick={() => dispatch({ type: 'decrement' })} className="bg-red-500 text-white px-4 py-2 rounded">Decrement</button>
          <button onClick={() => dispatch({ type: 'reset' })} className="bg-gray-500 text-white px-4 py-2 rounded">Reset</button>
        </div>
        <p className='text-gray-600 mt-4'>Current value: {state}</p>
    </div>
  )
}

export default Usereducerhook
