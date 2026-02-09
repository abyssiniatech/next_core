    "use client"
    import {SetStateAction, useState}  from "react"
const TodoApp = () => {
    const [todo,setTodo] = useState<string>('')
    const [todos,setTodos] = useState <string[]>([])
    const handleChange =(e: { target: { value: SetStateAction<string>; }; }) =>{
        setTodo(
             e.target.value;
        )
    }
       

const handleSubmit =(e) =>{
      e.preventDafault()
      setTodos(
        [...todos,todo]
      )
}
    return (
    <div>
         <header>

         <h1>todo app</h1>
         <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter todo" onChange={handleChage}/>
            <button>Add</button>
         </form>
         </header>
    </div>
  )
}

export default TodoApp
function setTodos(arg0: any[]) {
    throw new Error("Function not implemented.");
}

