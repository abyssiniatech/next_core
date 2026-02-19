

const Daynamicpage =async ({params}:{params: Promise<{id:"string"}>}) => {
  const {id} = await params;
    return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-700 text-white">
        <h1>the admin id is : {id}</h1>
    </div>
  )
}

export default Daynamicpage
