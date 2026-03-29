// link the nav logic 
"use client"
import Link from 'next/link';

import { usePathname } from 'next/navigation';
const link=[
    {name:'Home',href:'/'},
    {name:'About',href:'/about'},
    {name:'Contact',href:'/contact'},
    {name:'Blog',href:'/blog'},
]

const layout = ({children}: {children: React.ReactNode}) => {
    const pathname = usePathname();
    
  return (
    <div>
        <section className='flex gap-4 p-4 bg-gray-100 items-center justify-center'>
            {link.map((item) => {
                const activeLink = item.href === '/' ? 'text-pink-700' : 'text-gray-700';
                return (
                    <Link key={item.href} href={item.href} className={activeLink}>
                        {item.name}
                    </Link>
                );

            })}
            {/* go to home */}
            <button onClick={() => pathname.push('/')} className='px-4 py-2 bg-pink-700 text-white rounded text-2xl hover:bg-pink-800 transition'>
                Go to home
            </button>
        </section>
        {children}
    </div>
  )
};

export default layout;