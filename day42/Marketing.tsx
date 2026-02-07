      "use client"
      
  import Link from "next/link"
  export default function Marketinglayout(){
    return(
        <div className="bg-indigo-300 min-h-screen text-white text-2xl font-bold p-10 flex justify-center items-center flex-col gap-10">
         <h1>My website</h1>
         <nav className="flex justify-between gap-4">
            <Link href="/" >Home </Link>
            <Link href="/about" > About</Link>
            <Link href="/product" >Product</Link>
            <Link href="/marketing" >Marketing</Link>
         </nav>
       </div>
    )
  }