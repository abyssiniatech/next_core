import Login from "@/app/components/form/Hookform";
import Simpleform from "@/app/components/form/Simpleform"
import Name from "@/app/components/form/Name"
import Password from "@/app/components/form/Password"
import Form from "../components/form/Form";
export default function Formpage(){
    return(
        <div className="min-h-screen text-white flex-col bg-indigo-800 flex justify-center items-center">
        <Login />     
        <Simpleform /> 
        <Name />     
        <Password />
        <Form />   
        </div>
    )
}