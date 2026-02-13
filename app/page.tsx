// app/page.tsx
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ErrorBoundary as ErrorBoundary1 } from "@/components/ErrorBoundary1";
import BuggyCounter from "@/components/BuggyCounter";
import BuggyCounter1 from "@/components/BuggyCounter";
import Async from "@/components/Async";

export default function Page() {
  return (
     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <section>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      </section>
      <section>
         <ErrorBoundary1>
          <BuggyCounter1 />
        </ErrorBoundary1>
      </section>
       
       <main>
          <h1 className="text-2xl font-bold mb-4">Async Data Fetching</h1>
        {/* by using ternary operator if the component is error under Error component else render */}
            
         <Async />
        
       </main>
    </div>
  );
}
