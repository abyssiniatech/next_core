"use client"
const initial =0;
import { useReducer } from "react"
type Action = { type: "INCREMENT" | "DECREMENT" | "RESET" };
  const reducer = (state: number, action: Action) => {
    switch(action.type){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case  "RESET":
            return 0;
        default:
            return state;
    }
  }
  const Reducer2 = () => {
     const [state,dispatch] = useReducer(reducer,initial);
  return (
    <div className="min-h-screen bg-indigo-900 text-white flex justify-center items-center flex-col">
      <section className="bg-indigo-700 p-10 rounded-lg shadow-lg">
        <p className="text-2xl text-center text-pink-800" >Current value: {state}</p>
        <button className="bg-teal-700 text-white px-4 py-2 rounded-lg m-2 hover:bg-teal-600" onClick={() => dispatch({type:"INCREMENT"})}>Increment</button>
        <button className="bg-teal-700 text-white px-4 py-2 rounded-lg m-2 hover:bg-teal-600" onClick={() => dispatch({type:"RESET"})}>Reset</button><button className="bg-teal-700 text-white px-4 py-2 rounded-lg m-2 hover:bg-teal-600" onClick={() => dispatch({type:"DECREMENT"})}>Decrement</button>
        <button className="bg-teal-700 text-white px-4 py-2 rounded-lg m-2 hover:bg-teal-600" onClick={() => dispatch({type:"DECREMENT"})}>Reset</button><button className="bg-teal-700 text-white px-4 py-2 rounded-lg m-2 hover:bg-teal-600" onClick={() => dispatch({type:"DECREMENT"})}>Decrement</button>
         </section>
    </div>
  )
}

export default Reducer2
