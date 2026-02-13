import Parent from "@/components/hooks/memo/Parent";
export default function Page() {
  return (
     
       <div className=" bg-gray-400 flex items-center justify-center flex-col min-h-screen">
        <h1 className="text-xl font-bold">React.memo Demo</h1>
        <Parent />
       </div>
    
  );
}
