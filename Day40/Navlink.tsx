  "use client"

import Link from "next/link"

const Navlink = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 flex items-center justify-between ">
         <h2 className="text-white font-bold mr-4">My website</h2>
      <nav className="flex justify-center items-center gap-4">
         <Link href = "/">Home</Link>
         <Link href = "/about">About</Link>
         <Link href = "/contact">Contact</Link>
         <Link href = "/api">API</Link>
      </nav>
    </div>
  )
}

export default Navlink
