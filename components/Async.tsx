//   i want to fetch data from jsonplaceholder and display it in the component
//  and these components are nested with error boundary and buggy counter components
//  json placeholder is a fake online REST API for testing and prototyping
// users endpoint: https://jsonplaceholder.typicode.com/users
// typescripts with interface id ,title and body with
  interface Post {
    id: number;
    title: string;
    body: string;
  }

const Async = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await response.json();
    // throw new Error('Failed to fetch posts'); // Uncomment to test error boundary
    
     return (
    <div className="p-4 bg-white rounded border border-gray-300 shadow min-h-screen flex flex-col gap-4">
      {posts.map(post => (
        <div key={post.id} className=" border p-4 m-2 rounded border-gray-300">
          <p className="text-sm text-gray-500">{post.id}</p>
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p className="text-gray-700">{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Async
