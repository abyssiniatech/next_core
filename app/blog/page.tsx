interface blog{
    id:number
    title:string
    completed:boolean
}

export default async function BlogApi(){
    const response= await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await response.json()
    return(
        <div>
            {
                data.map((val: blog)=>{
                    return(
                        <section key={val.id}>
                            <p>{val.id}</p>
                            <p>{val.title}</p>
                            <p>{val.completed}</p>
                        </section>
                    )
                })
            }
        </div>
    )
}