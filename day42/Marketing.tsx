    "use client"

  import Link from "next/link"
  export default function Marketinglayout(){
    return(
        <div className="bg-indigo-300  text-white  font-bold p-4 flex justify-between items-center  gap-4">
         <h1>My website</h1>
         <nav className="flex justify-between gap-4">
            <Link href="/" >Home </Link>
            <Link href="/about" > About</Link>
            <Link href="/product" >Product</Link>
            <Link href="/market" >Market</Link>
         </nav>
       </div>
    )
  }