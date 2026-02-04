export default async function About(){
    const data=await fetch("https://jsonplaceholder.typicode.com/posts")
    const res=await data.json()
    return(
        <section className="bg-indigo-700 text-white p-4 min-h-screen text-center">
            <h1>About page </h1>
            {
             res.map((list) =>{
                return(
                    <div key={list.id} className="border border-gray-400 rounded p-2 m-2 text-2xl flex flex-col">
                      <p>{list.id}</p>
                      <p>{list.title}</p>
                      <p>{list.body}</p>

                    </div>
                )
             })   
            }
        </section>
    )
}