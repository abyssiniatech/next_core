"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <div  className="min-h-screen flex justify-center items-center flex-col bg-indigo-900 text-white shadow-lg">
      <h1 className="text-2xl font-bold">Contact Page for Slug: <span className="text-pink-500 text-3xl ">{slug}</span></h1>
    </div>
  );
}
