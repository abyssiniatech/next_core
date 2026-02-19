import {useRef} from "react"
const Useref = () => {
    const inputref= useRef(null)
    const handlefocus =()=>{
        inputref.current=inputref.current.focus()
    }
  return (
    <div>
      <input type="text" ref={inputref}  />
      <button onClick={handlefocus}>Onfocus</button>
    </div>
  )
}

export default Useref
