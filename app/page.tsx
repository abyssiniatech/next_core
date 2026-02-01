import Image from "next/image";
import Img from "@/public/next.svg"
export default function Home(){
  return(
    <div className="bg-indigo-900 text-white p-4 text-center min-h-screen w-100 h-40 flex items-center justify-center m-auto">
    <p>Home Page</p>
   <Image src = {Img} 
     alt=" surafel image "
    //  fill
     height={100}
     width={100}

    style={{objectFit:"cover"}}
   />
    </div>
  )
}