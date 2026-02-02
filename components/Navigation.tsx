  "useclient"

import Image from "next/image"
import Link from "next/link"

const Navigation = () => {
  return (
    <div className="bg-gray-800 text-white flex justify-between items-center p-4 ">
       <Image src="vercel.svg" width={20} height={20} alt="no image here" />
       <h2>My website </h2>
      <nav className="bg-gray-800 p-4 text-white flex space-x-4">  
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/product" className="hover:underline">Product</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/user" className="hover:underline">User</Link>
            <Link href="/show" className="hover:underline">show</Link>
            <Link href="/hooks" className="hover:underline">Hooks</Link>
         </nav>
    </div>
  )
}

export default Navigation
