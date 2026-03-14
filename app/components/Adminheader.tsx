import Activelinks from "./Activelinks";


const Adminheader = () => {
  return (
    <div className="flex p-4 bg-indigo-600 justify-between  text-white bg-indigo-800 w-full p-4">
        <h1 className="text-semibold ">Admin Header</h1>
        <Activelinks />
    </div>
  )
};

export default Adminheader;