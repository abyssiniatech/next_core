import Fetchapi from "@/app/components/Fetchapi";

export default function Page() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">
        Fetch data from JsonPlaceholder server
      </h1>
      <Fetchapi />
    </div>
  );
}
