const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    return (
        <div>
            <h1>welcome my student  and your id is :{id} </h1>
        </div>
    );
}

export default page
