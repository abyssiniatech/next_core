// app/page.tsx
import { ErrorBoundary } from "@/components/ErrorBoundary";
import BuggyCounter from "@/components/BuggyCounter";

export default function Page() {
  return (
    <ErrorBoundary>
      <BuggyCounter />
    </ErrorBoundary>
  );
}
