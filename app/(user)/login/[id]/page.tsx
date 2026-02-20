export default async function Daynamic({params}:{params:Promise<{id:string}>}){
    const {id} = await params;
    return (
        <div>
            <h1>Login user name :{id}</h1>
        </div>
    )
}