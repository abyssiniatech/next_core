"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import { JSX } from "react/jsx-runtime"
interface heros{
    map(arg0: (item: any) => JSX.Element): import("react").ReactNode
    id:number
    name:string
    alterEgo:string

}
const Fetchdata = () => {
    // usestate to store the data
    const [data, setData] =useState<heros>([])
    const [loader, setLoader] = useState<boolean>(true)
     useEffect(() => {
        axios.get("http://localhost:4000/superhero")
        .then((res) => {
            setData(res.data)
            setLoader(false)
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
            setLoader(false)
        })
    }, [])
    if(loader){
       return <h1>Loading .....</h1> 
    }
  return (
    <div className="flex flex-col justify-center items-center gap-4 min-h-screen bg-indigo-800 text-white">
        <p className="text-white text-3xl m-2">Tradational method of fetching data</p>
     
      {
        loader  ? <h1>Loading...</h1>  : data.map((item) => {
            return <section key={item.id} className="rounded border border-gray-300 p-4 flex justify-center items-center flex-col">
                <h2 className="border border-gray-200 p-2 m-2 rounded">{item.id}{item.name} {item.alterEgo}</h2>
                <h2 className="border border-gray-200 p-2 m-2 rounded">{item.id}{item.name} {item.alterEgo}</h2>

                <h2 className="border border-gray-200 p-2 m-2 rounded">{item.id}{item.name} {item.alterEgo}</h2>
                </section>
        }) 
         
      }
    </div>
  )
}

export default Fetchdata
