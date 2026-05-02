"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const link = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
  { name: "Services", href: "/services" },
  { name: "Product", href: "/product" },
  {name:"Dashboard",href:"/dashboard"},
];

const Navlink = () => {
  const pathname = usePathname(); 

  return (
    <div className=" p-4 flex gap-4 justify-center">
      {link.map((item, index) => {
        const isActive = item.href === pathname;

        return (
          <Link
            key={index}
            href={item.href}
            className={`text-white hover:text-blue-500 ${
              isActive ? "text-blue-500 font-bold" : ""
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Navlink;