import Useeffect from '@/components/hooks/Useeffect'
import Counter from '@/components/hooks/Usestate'
import React from 'react'
import Useref from '@/components/hooks/Useref'
import UseReducer from '@/components/hooks/UseReducer'
const page = () => {
  return (
    <div className='text-center min-h-screen text-pink-900 flex-col flex items-center justify-center '>
       <h1>Hooks in next js </h1>
      <Counter />
      <Useeffect />
      <Useref />
      <UseReducer />
    </div>
  )
}

export default page
