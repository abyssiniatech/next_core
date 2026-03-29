

const page = async({params}: {params: Promise<{slug: string}>}) => {
    const {slug} = await params;
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1>welcome to my channel : {slug}</h1>
    </div>
  )
};

export default page;