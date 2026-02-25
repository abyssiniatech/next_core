"use client"
import { useEffect, useState } from "react"
import axios from "axios"
interface heros{
    id:number
    name:string
    alterEgo:string

}
const Fetchdata = () => {
    // usestate to store the data
    const [data, setData] =useState<string[]>([])
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
    <div>
        <p>Tradational method of fetching data</p>
     
      {
        loader  ? <h1>Loading...</h1>  : data.map((item:heros) => {
            return <h1 key={item.id}>{item.name}</h1>
        }) 
         
      }
    </div>
  )
}

export default Fetchdata
