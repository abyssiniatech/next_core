  "use client"
import{useEffect,useState} from  'react'
interface ContactProps{
id:number;
title:string;
body:string;
}


export default function About(){
    const [data,setData] = useState<ContactProps[]>([]);
    useEffect(()=>{
         async function fetchData(){
            try{
                const res= await fetch("https://jsonplaceholder.typicode.com/posts");
                const data= await res.json();
                setData(data);
            }
            catch(error){
                console.error("Error fetching data:",error);
         }
        }
        fetchData();
    },[])
    return(
        <section className="bg-indigo-700 text-white p-4 min-h-screen text-center">
             {
                 data.slice(0,10).map((list)=>{
                    return (
                        <div key={list.id} className="border-1 border-white mb-4 p-4  border-gray-400 rounded">
                            <h2 className="text-2xl font-bold mb-2">{list.title}</h2>
                            <p>{list.body}</p>
                        </div>
                    )
                 })
             }
        </section>
    )
}