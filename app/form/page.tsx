import Simpleform from "@/components/Reactform/Simpleform"
import SimpleFormvalidation from './../../components/Reactform/SimpleFormvalidation';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
        <Simpleform />
        <SimpleFormvalidation />
    </div>
  )
}

export default page
