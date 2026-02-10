import Useeffect from '@/components/hooks/Useeffect'
import Counter from '@/components/hooks/Usestate'

import Useref from '@/components/hooks/Useref'
import UseReducer from '@/components/hooks/UseReducer'
import TodoApp from '@/components/hooks/Todo'
import Card from '@/components/hooks/Card'
import Usestatehook from '@/components/hooks/Usestatehook'
import Useeffecthook from '@/components/hooks/Useeffecthook'
import Userefhook from '@/components/hooks/Userefhook'
const page = () => {
  return (
    <div className='text-center min-h-screen text-pink-900 flex-col flex items-center justify-center '>
       <h1>Hooks in next js </h1>
      <Counter />
      <Useeffect />
      <Useref />
      <UseReducer />
      <TodoApp />
      <Card />
      <Usestatehook />
      <Useeffecthook />
      <Userefhook />
    </div>
  )
}

export default page
