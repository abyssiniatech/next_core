"use client";
import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button className="bg-indigo-800 text-white px-4 py-2 rounded text-2xl" onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      <Child name="Surafel" />
    </>
  );
}
