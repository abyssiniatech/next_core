// link the nav logic 
import Link from 'next/link';
const link=[
    {name:'Home',href:'/'},
    {name:'About',href:'/about'},
    {name:'Contact',href:'/contact'},
    {name:'Blog',href:'/blog'},
]

const layout = ({children}: {children: React.ReactNode}) => {
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
        </section>
        {children}
    </div>
  )
};

export default layout;