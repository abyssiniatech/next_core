export default async function BlogApi(){
    const response= await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await response.json()
    return(
        <div>
            {
                data.map((val)=>{
                    return(
                        <section>
                            <p></p>
                        </section>
                    )
                })
            }
        </div>
    )
}