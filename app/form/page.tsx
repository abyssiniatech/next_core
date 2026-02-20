import Login from "@/app/components/form/Hookform";
import Simpleform from "@/app/components/form/Simpleform"
import Name from "@/app/components/form/Name"
export default function Formpage(){
    return(
        <div className="min-h-screen text-white flex-col bg-indigo-800 flex justify-center items-center">
        <Login />     
        <Simpleform /> 
        <Name />        
        </div>
    )
}