import Parent from "@/components/hooks/memo/Parent";
export default function Page() {
  return (
     
       <div className="min-h-screen bg-gray-100 flex items-center justify-center min-h-screen">
        <h1 className="text-xl font-bold">React.memo Demo</h1>
        <Parent />
       </div>
    
  );
}
