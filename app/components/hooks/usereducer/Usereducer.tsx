"use client"
// interface counter{
//     state:number;
//     type:string;
// }
const initial =0
import { useReducer } from "react"
const reducer=(state: number,action: { type: string })=>{
    switch(action.type){
        case "DECREMENT":
            return state-1
            break
        case "RESET":
            return  initial;
            break;
        case "INCREMENT":
            return state+1
            break;
        default :
          return state;
          break;

    }

}
const Reducer=()=>{
    const [state,dispatch] = useReducer(reducer,initial);
    return(
        <div className="min-h-screen bg-indigo-900 text-white flex justify-center flex-col items-center">
         <section className="bg-indigo-500  p-4 rounded text-center">
            <h1 className="text-4xl font-bold shadow-md m-4">UseReducer Hook</h1>
            <p className="text-white text-5xl">{state}</p> 
          <button onClick={()=>dispatch({type:"DECREMENT"})} className="bg-teal-600 px-4 py-2 rounded m-2 text-2xl hover:bg-teal-700 text-white">Decrement</button>
          <button onClick={()=>dispatch({type:"RESET"})} className="bg-teal-600 px-4 py-2 rounded m-2 text-2xl hover:bg-teal-700 text-white">Reset</button>
          <button onClick={()=>dispatch({type:"INCREMENT"})} className="bg-teal-600 px-4 py-2 rounded m-2 text-2xl hover:bg-teal-700 text-white">Increment</button>
       </section>
        </div>
    )

}
export default Reducer