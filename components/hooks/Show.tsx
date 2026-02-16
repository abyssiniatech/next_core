    "use client"
import {useState} from "react"
export default function Show() {
    const [show,Isshow] = useState(false);
      return(
        <div className="min-h-screen  flex justify-center items-center flex-col bg-indigo-900 text-white p-4 m-2 ">
             {

            
            show &&
            (
            <div className="bg-indigo-700 w-93 p-8 text-white rounded">
              <h1>My website</h1>
              <p>these is the best show and hide 
              page of fthe following  xand also it os the best course4 ever after 6 menth i ams the professional wqeb develope all over the worls and di ahave it its the nice. 
              </p>
              </div>
            )
           }
              <button onClick={() => Isshow(!show)} className="bg-green-900 text-white px-4 py-2 rounded hover:bg-indigo-600 shadow-md">{show ? "Hide" : "Show" }</button>
        </div>
      )
}