
"use client"

import { useReducer } from "react";
const initial=0

const  reducer= (state:number,action: {type:string}) => {
    switch (action.type) {
        case "DECREMENT":
            return state-1
            break;
         case "RESET":
            return initial
            break;
        case "INCREMENT":
            return state+1
            break;
        default:
            return state;
            break;
    }
};

const Reducer1 = () => {
    const [state,dispatch]=useReducer(reducer,initial)
  return (
    <div className="bg-indigo-800 text-white flex min-h-screen justify-center items-center p-4   ">
        <section className="bg-indigo-700  text-white rounded border border-white ">
            <p className="bg-teal-700 text-white rounded p-2 text-center text-3xl">{state}</p>
            <button className="bx-4 py-2 bg-gray-300 hover:bg-gray-200 rounded border-0 p-2" onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
            <button className="bx-4 py-2 bg-gray-300 hover:bg-gray-200 rounded border-0 p-2" onClick={()=>dispatch({type:"RESET"})}>Reset</button>
            <button className="bx-4 py-2 bg-gray-300 hover:bg-gray-200 rounded border-0 p-2" onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
        </section>
    </div>
  )
}

export default Reducer1
