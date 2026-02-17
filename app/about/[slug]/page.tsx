    
export default async function page({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;
    return (
        <div className=" bg-gray-400 flex items-center justify-center flex-col min-h-screen text-white">
             <h1>Daynamic route</h1>
            <h1 className="text-xl font-bold">About: <span className="text-blue-500">{slug}</span></h1>
        </div>
    );
}
