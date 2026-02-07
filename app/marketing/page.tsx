     

interface Posts{
    id:number
    title:string
    body:string

}

const  Market =async()=>{
    const  res= await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
      return (
        <div>
          {data.map((list: Posts) => (
            <section key={list.id} className="bg-indigo-900 text-white rounded m-2 p-2 ">
              <p>{list.id}</p>
              <p>{list.title}</p>
              <p>{list.body}</p>
            </section>
          ))}
        </div>
      )
}
 
export default Market