export default async function(){
   await new Promise((resove)=>{
         setTimeout(resove,2000)
   })      
  return(
        <div className="min-h-screen bg-linear-to-br from-purple-900 to-pink-800 flex items-center justify-center">
      <h1 className="text-3xl font-bold text-center mt-8">About Page</h1>
    </div>
    ) 
}