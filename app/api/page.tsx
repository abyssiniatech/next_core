interface Post {
    id:number;
    title:string;
    body:string;
}



const page = async() => {
  const res= await fetch("https://jsonplaceholder.typicode.com/posts");
  const data=await res.json()

  return (
    <div>
         {
            data.map((item:Post)=>{
                return (
                    <div key={item.id} className="border p-4 mb-4 border-gray-300 rounded shadow hover:shadow-lg transition duration-300">
                      <p><span className="font-bold">User ID:</span> {item.id}</p>
                      <h2 className="text-xl font-bold">{item.title}</h2>
                      <p>{item.body}</p>
                    </div>
                )
            })
         }
    </div>
  )
}

export default page
