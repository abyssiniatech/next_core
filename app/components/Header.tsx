   "use client"
// header components 
  import Link from "next/link"
import Navlink from "./Navlink"
const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center ">
      <h1><Link href="/">My website</Link></h1>
      <Navlink  />
    </div>
  )
}

export default Header
