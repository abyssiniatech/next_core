   "use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import Form from "../components/basic/Form"

export default function Basic(){
    const navigate = useRouter()
    return(
        <div className="bg-indigo-800 min-h-screen text-white flex flex-col items-center m-4  justify-between">
            <p>Basic page!</p>
            <button onClick={()=>{navigate.push('/')}}>Home</button>
            <Link href="/about">
               <p>About</p>
            </Link>
            <section>
                <Form />
            </section>
        </div>
    )
}