// components/BuggyCounter.tsx
"use client";

import { useState } from "react";

export default function BuggyCounter() {
  const [count, setCount] = useState<number | null>(0);

  if (count === null) {
    throw new Error("Counter crashed!");
  }

  return (
    <button
      onClick={() => setCount(null)}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Click to crash
    </button>
  );
}
