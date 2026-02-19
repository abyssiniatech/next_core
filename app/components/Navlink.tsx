   "use client"
   import Link from "next/link"
const links=[
    {name:"About",href:"/about"},
    {name:"Admin",href:"/admin"},
    {name:"Dashboard",href:"/dashboard"},
    {name:"Contact",href:"/contact"},
    {name:"User",href:"/user"},
    {name:"Hooks",href:"/hooks"},
    {name:"Api",href:"/api"}
]

const Navlink = () => {
  return (
    <div className="flex justify-center items-center gap-4 hover:underline-pink-700">
       {
        links.map((list)=>{
         return(
            <div key={list.name} >
            <Link  href={list.href} >{list.name}</Link>
           </div>
         )
        })
       }
    </div>
  )
}

export default Navlink
