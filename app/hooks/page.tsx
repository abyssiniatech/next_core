import Useeffect from "../components/hooks/useeffect/Useeffect"
import Usestate from "../components/hooks/usestate/usestate"


const Hooks = () => {
  return (
    <div className="bg-indigo-900 text-white flex justify-center items-center">
      <Usestate />
      <Useeffect />
    </div>
  )
}

export default Hooks
