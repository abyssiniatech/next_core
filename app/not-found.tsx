export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">Post Not Found 😢</h1>
      <p className="mt-4 text-gray-500">
        This post does not exist or the ID is greater than 100.
      </p>
    </div>
  );
}
