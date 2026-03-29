"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "../components/card/Card";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // simulate loading (2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // navigation handler
  const handleClick = () => {
    router.push("/");
  };

  // loading UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  // main UI
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <Card />
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-pink-700 text-white rounded text-2xl hover:bg-pink-800 transition"
      >
        Go to home
      </button>
    </div>
  );
};

export default Page;