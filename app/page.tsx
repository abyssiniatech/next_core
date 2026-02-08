"use client"

import { useState } from "react"
import BlogCard from "@/components/blog/BlogCard"

interface Post {
  id: number
  title: string
  body: string
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  const handleFetch = async () => {
    setLoading(true)
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data: Post[] = await res.json()
    setPosts(data)
    setLoading(false)
  }

  return (
    <main className="container mx-auto px-4 py-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Latest Blog Posts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard />
        <BlogCard />
        <BlogCard />

        <section className="col-span-full flex flex-col items-center gap-4 border border-gray-300 p-6 rounded">
          <button
            onClick={handleFetch}
            className="bg-indigo-900 text-white px-4 py-2 rounded"
          >
            {loading ? "Loading..." : "Fetch data"}
          </button>

          {posts.map((post) => (
            <div key={post.id} className="border p-3 rounded w-full">
              <p className="font-bold">{post.title}</p>
              <p className="text-sm text-gray-600">{post.body}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
