export default async function DashboardUser({params}:{params: Promise<{slug:string}>}) {
  const { slug } = await params;

  return (
    <div className="bg-indigo-900 text-white min-h-screen flex justify-center items-center">
      <h1>Dashboard ID: {slug}</h1>
    </div>
  );ionk
}
