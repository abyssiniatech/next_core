"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
export const link=[
    {name:"Home",path:"/"},
    {name:"About",path:"/about"},
    {name:"Contact",path:"/contact"},
]

const Activelinks = () => {
    const pathname=usePathname()
    
    return (
        <div className="flex justify-center gap-4  bg-indigo-800 text-white">
            {
                link.map((item) => {
                    const isActive=pathname===item.path
                    return <Link key={item
                        .name} href={item.path
                    } className={`border p-2 rounded ${isActive ? 'bg-white underline text-pink-800' : 'border-gray-300'}`}>
                        {item.name}
                    </Link>
                })
            }
        </div>
    )
}

export default Activelinks
                    