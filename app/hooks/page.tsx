import Useeffect from "../components/hooks/useeffect/Useeffect"
import Usestate from "../components/hooks/usestate/usestate"
import Reducer from "../components/hooks/usereducer/Usereducer"
import Reducer1 from "../components/hooks/usereducer/Reducer1"

const Hooks = () => {
  return (
    <div className="bg-indigo-900 text-white flex justify-center items-center flex-col min-h-screen">
      <Usestate />
      <Useeffect />
      <Reducer />
      <Reducer1 />
    </div>
  )
}

export default Hooks
