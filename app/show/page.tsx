"use client"


import { useState } from "react"

export default function show (){
    const [show,isShow] = useState(false)
    
    return (
        <div className="min-h-screen bg-indigo-900 text-white  flex flex-col justify-center items-center   border border-gray-300 rounded ">
            {show && 
            <section className="bg-indigo-800 text-white p-4 rounded ">
            <section className="bg-indigo-800 text-white p-4 rounded w-96 mx-auto  text-center text-2xl">
                <h1 className="text-6xl text-shadow text-teal-700 ">Show page </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quidem odio, iure at repudiandae aspernatur eius a cumque amet labore deserunt sed sapiente ad doloribus quis assumenda nulla error. Voluptate.</p>
            </section>
            </section>
            }
            <button onClick={() => isShow(!show)} className="bg-pink-900 text-white rounded px-4 py-2 text-2xl mt-4">{show ? "Hide" : "show"}</button>
        </div>
    )
}