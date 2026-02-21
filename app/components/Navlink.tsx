//    "use client"
//    import Link from "next/link"
// const links=[
//     {name:"About",href:"/about"},
//     {name:"Admin",href:"/admin"},
//     {name:"Dashboard",href:"/dashboard"},
//     {name:"Contact",href:"/contact"},
//     {name:"User",href:"/user"},
//     {name:"Hooks",href:"/hooks"},
//     {name:"Api",href:"/api"},
//     {name:"Form",href:"/form"},
//     {name:"Basic",href:"/basic"},

// ]

// const Navlink = () => {
//   return (
//     <div className="flex justify-center items-center gap-4 hover:underline-pink-700">
//        {
//         links.map((list)=>{
//          return(
//             <div key={list.name} >
//             <Link  href={list.href} >{list.name}</Link>
//            </div>
//          )
//         })
//        }
//     </div>
//   )
// }

// export default Navlink




"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "About", href: "/about" },
  { name: "Admin", href: "/admin" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Contact", href: "/contact" },
  { name: "User", href: "/user" },
  { name: "Hooks", href: "/hooks" },
  { name: "Api", href: "/api" },
  { name: "Form", href: "/form" },
  { name: "Basic", href: "/basic" },
];

const Navlink = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center items-center gap-4">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`
              px-3 py-1 rounded
              ${isActive
                ? "text-pink-500 underline font-semibold"
                : "text-white hover:text-pink-400"}
            `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navlink;