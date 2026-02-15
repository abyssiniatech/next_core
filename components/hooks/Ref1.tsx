"use client";
import { useRef } from "react";

export default function InputFocus() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input ref={inputRef} className="border p-2" />
      <button
        onClick={() => inputRef.current?.focus()}
        className="ml-2 px-3 py-1 bg-green-500 text-white"
      >
        Focus
      </button>
    </>
  );
}
