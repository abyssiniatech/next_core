    "use client"
  import { usePathname } from "next/navigation"
  import Link from "next/link"
  const Navlinks=[
    {name:"home",href:"/"},
    {name:"About",href:"/about"},
    {name:"Product",href:"/product"},
    {name:"market",href:"/market"},
    {name:"Counter",href:"/counter"},
  ]



  export default function Marketinglayout(){
    const pathname=usePathname()
    return(
        <div className="bg-indigo-300  text-white  font-bold p-4 flex justify-between items-center  gap-4">
         <h1>My website</h1>
         <nav className="flex justify-between gap-4">
           {Navlinks.map((link)=>{
            const isActive=pathname===link.href
            return(<Link href={link.href} key={link.name} className={isActive?"bg-white text-pink-800":"bg-indigo-300   text-blue-700"}>{link.name}</Link>)
           })}
         </nav>
       </div>
    )
  }