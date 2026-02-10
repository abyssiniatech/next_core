"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default  async function Product() {
  const [data, setData] = useState<User[]>([]);
   await new Promise((resolve: any)=>{
       setTimeout(resolve,3000)
   })
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="bg-indigo-700 text-white p-4 min-h-screen text-center">
      <h1 className="text-2xl font-bold mb-4">Product Page</h1>

      <div className="mt-4 grid gap-4 max-w-2xl mx-auto">
        {data.map((user) => (
          <div
            key={user.id}
            className="p-4 bg-white text-black rounded shadow"
          >
            <h2 className="font-semibold text-lg">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
