import Link from "next/link"
export default function DashboardLayout({children}:{children: React.ReactNode}){
    return(
        <div className=" text-center  p-4 bg-indigo-600 text-white ">
            <nav className="flex justify-center items-center gap-4 flex-1">
                <Link className="hover:underline active:underline-pink-700 hover:var(--text-2xl)" href="/">Home</Link>
                <Link className="hover:underline active:underline-pink-700 hover:var(--text-2xl)" href="/about">About</Link>
                <Link className="hover:underline active:underline-pink-700 hover:var(--text-2xl)" href="/product">Product</Link>
                <Link className="hover:underline active:underline-pink-700 hover:var(--text-2xl)" href="/contact">Contact</Link>
            </nav>
            {children}
        </div>
    )
}