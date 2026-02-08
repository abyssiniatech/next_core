import BlogCard from "@/components/blog/BlogCard"

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Latest Blog Posts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </main>
  )
}
