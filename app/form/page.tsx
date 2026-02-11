import Simpleform from "@/components/Reactform/Simpleform"
import SimpleFormvalidation from './../../components/Reactform/SimpleFormvalidation';
import Reacthookform from "@/components/Reactform/Reacthookform";
import Form from "@/components/Reactform/Form";
const page = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-4 border-2  rounded">
        <Simpleform />
        <SimpleFormvalidation />
       <Reacthookform />
       <Form />
    </div>
  )
}

export default page
