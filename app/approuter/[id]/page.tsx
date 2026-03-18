export default async function Approuter(params:{params:Promise<{id:string}>}) {
    const {id} = await params;
  return (
    <div className="bg-indigo-800 text-white min-h-screen flex flex-col items-center">
      <p>App router: {id}</p>
    </div>
  );
}