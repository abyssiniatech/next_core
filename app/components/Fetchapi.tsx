  "use client"

interface user{
    id:number;
    title:string;
    body:string;
}

const Fetchapi = async() => {
    const Api_link = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await Api_link.json()

  return (
    <div className="border border-gray-300 p-4 m-2 flex justify-center items-center flex-col ">
       { 
        data.map((list:user)=>{
            return(
                <div key={list.id} className="border border-gray-400 rounded p-4 m-2 ">
                 <h2>{list.id}</h2>
                 <p>{list.title}</p>
                 <p>{list.body}</p>
            

                </div>
            )
        })
       }
    </div>
  )
}

export default Fetchapi
