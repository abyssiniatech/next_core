export default async function DaynamicPage({params}:{params : Promise<{slug:string}>}){
    const {slug} = await params
    return(
        <div 
         className="bg-indigo-900 
         text-white
         flex
         justify-center
         items-center 
         min-h-screen
           ">
           <pre>Id: {slug}</pre>
        </div>
    )
}