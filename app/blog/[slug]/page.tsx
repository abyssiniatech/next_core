export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  
 
  return (
    <div className="bg-indigo-800 text-white min-h-screen flex items-center justify-center">
      <h1>my post id is : {slug}</h1>
      
    </div>
  )
}