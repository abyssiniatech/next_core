

const page = async({params}: {params: Promise<{slug: string}>}) => {
    const {slug} = await params;
  return (
    <div>
        <h1>welcome to my channel : {slug}</h1>
    </div>
  )
};

export default page;