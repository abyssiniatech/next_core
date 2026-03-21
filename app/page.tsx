   "use client"
import { useState } from "react";

export default function Page() {
  const [text,setText]=useState<string>("Home page");
  const handletext = ()=>{
    setText("Welcome to nextjs 16")
  }
  return (
     
       <div className=" bg-indigo-700 text-white flex  items-center justify-center flex-col min-h-screen">
        <h1 className="text-xl font-bold">{text}</h1>
        <button className="bg-pink-800 rounded-full text-white text-2xl hove onr:bg-pink-700 px-4 py-2"  onClick={handletext}>click me</button>
       </div>
    
  );
}
