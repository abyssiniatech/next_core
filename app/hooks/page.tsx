import Useeffect from "../components/hooks/useeffect/Useeffect"
import Usestate from "../components/hooks/usestate/usestate"
import Reducer from "../components/hooks/usereducer/Usereducer"

const Hooks = () => {
  return (
    <div className="bg-indigo-900 text-white flex justify-center items-center flex-col min-h-screen">
      <Usestate />
      <Useeffect />
      <Reducer />
    </div>
  )
}

export default Hooks
