import Login from "@/app/components/form/Hookform";
import Simpleform from "@/app/components/form/Simpleform"
export default function Formpage(){
    return(
        <div className="min-h-screen text-white bg-indigo-800 flex justify-center items-center">
        <Login />     
        <Simpleform />         
        </div>
    )
}