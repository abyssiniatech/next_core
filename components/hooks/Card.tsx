   "use client"
import { useState } from "react"

interface Car {
  name: string
  color: string
  year: number
}

const Card = () => {
  const [car, setCar] = useState<Car>({
    name: "BMW",
    color: "red",
    year: 2020,
  })

  return (
    <div className="p-30 mt-4 text-white border border-gray-100 rounded"> 
      <h1>Hooks in Next.js</h1>
      <p>Name: {car.name}</p>
      <p>Color: {car.color}</p>
      <p>Year: {car.year}</p>
    </div>
  )
}

export default Card
