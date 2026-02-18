   "use client"
// header components 
  
import Navlink from "./Navlink"
const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center ">
      <h1>My website</h1>
      <Navlink  />
    </div>
  )
}

export default Header
