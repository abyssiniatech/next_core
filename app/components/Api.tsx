   
   interface api{
    id:number,
    title:string,
    body:string,
   }
// https://jsonplaceholder.typicode.com/posts
const Api = async() => {
    const res=await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    console.log(data)
  return (
    <div>
      {
        data.map((list:api) =>{
            return (
                <div key={list.id} className="border border-gray-50 m-2 p-2 rounded">
                    <p>{list.id}</p>
                    <p>{list.title}</p>
                    <p>{list.body}</p>
                </div>
            )
        })
      }
    </div>
  )
};

export default Api;