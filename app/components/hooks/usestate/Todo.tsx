   "use client"

interface todo {
    todo:string;
    todos:string[]
}


import { useState } from "react"


const Todo = () => {
    const [todo,setTodo] = useState("")
    const [todos,setTodos] = useState([])

const handleInput =(e:React.HTMLInputAutoCompleteAttribute) =>{
    setTodo(e.target.value)
}

    // handle submit logic
    const handleSubmit =(e:React.HTMLInputAutoCompleteAttribute)=>{
        e.preventDafault()
        setTodos([...todos,todo])
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} type="text" placeholder="add todo.." />
        <button>Add</button>
      </form>
      {
        todos.map((list:todo,index)=>{
            return (
                <div key={index}>
                <p>{list}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default Todo
