// app/page.tsx
import { ErrorBoundary } from "@/components/ErrorBoundary";
import BuggyCounter from "@/components/BuggyCounter";
import BuggyCounter1 from "@/components/BuggyCounter";
export default function Page() {
  return (
     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <section>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      </section>
      <section>
         <ErrorBoundary>
          <BuggyCounter1 />
        </ErrorBoundary>
      </section>
    </div>
  );
}
