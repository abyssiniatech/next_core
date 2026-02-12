import Simpleform from "@/components/Reactform/Simpleform"
import SimpleFormvalidation from './../../components/Reactform/SimpleFormvalidation';
import Reacthookform from "@/components/Reactform/Reacthookform";
import Form from "@/components/Reactform/Form";
import ProfessionalForm from "@/components/Reactform/CompleteForm";
import NameForm from "@/components/Reactform/Name";
import FormTest from "@/components/Reactform/FormTest";
import StudentForm from  "@/components/Reactform/StudentForm"
const page = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-4 border-2  rounded">
        <Simpleform />
        <SimpleFormvalidation />
       <Reacthookform />
       <Form />
       <ProfessionalForm />
       <NameForm />
       <FormTest />
       <StudentForm />
    </div>
  )
}

export default page
