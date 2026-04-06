// create loading component on the app/basic/loading.tsx file

const Loading = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return (
        <div className="flex justify-center 
        items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900">loading...</div>
            {
                data && (
                    <div className="mt-4 text-center">
                        <h2 className="text-xl font-bold">Data Loaded</h2>
                        <p className="text-gray-700">{data.title} </p>

                    </div>
                )
            }
        </div>
    );
}
export default Loading;