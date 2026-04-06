import Link from "next/link";
const Basiclayout =({children}:{children:React.ReactNode})=>{

    return(
        <div className="bg-indigo-400 text-white flex justify-center items-center gap-2 p-4 flex-col hover:bg-indigo-500 active:underscore">
          <h1>Basic layout</h1>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/product">Product</Link>
          {children}
        </div>
    )
}
export default Basiclayout