import React from 'react'
const page = async({params}: {params: Promise<{slug: string}>}) => {
     const slug = (await params).slug
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <h1>daynamic route: {slug}</h1>
    </div>
  )
}

export default page
