
   "use client"

  //  link array 
  export const link =[
    {name:"About",href:"/about"},
    {name:"Card",href:"/card"},
    {name:"Form",href:"/form"},
  ]
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
const Contactpage = () => {
  const pathname=usePathname()
  const router = useRouter()
     const handleclick=() =>{
      router.push("/")
     }
  return (
    <div className="bg-indigo-900 text-white min-h-screen font-bold flex justify-center items-center">
      {link.map((list, index) => {
        const activeLink=pathname === list.href ? "text-pink-500" : "";
        return (
          <Link key={index} href={list.href} className={activeLink}>
            {list.name}
          </Link>
        );
      })}
      <h1>Contact page!</h1>
      <button
        onClick={handleclick}
        className="px-4 py-2 bg-pink-700 text-white rounded text-2xl">
        Go to home
      </button>
    </div>
  );
}

export default Contactpage
