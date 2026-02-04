"use client"; // optional if you want client interactivity

import React from "react";

// TypeScript type for user
type User = {
  name: string;
  username: string;
  avatar: string;
  bio: string;
  posts: number;
  followers: number;
  following: number;
};

// Dummy single user
const user: User = {
  name: "Dereb Cherotaw",
  username: "dereb123",
  avatar: "https://i.pravatar.cc/150?img=12",
  bio: "Full-stack developer | Next.js & TypeScript enthusiast | Lifelong learner",
  posts: 120,
  followers: 450,
  following: 180,
};

export default function UserPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* User Info */}
        <div className="flex items-center px-6 py-4">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src={user.avatar}
            alt={user.name}
          />
          <div className="ml-4">
            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">@{user.username}</p>
          </div>
        </div>

        {/* Bio */}
        <div className="px-6 py-4">
          <p className="text-gray-700 text-sm">{user.bio}</p>
        </div>

        {/* Stats */}
        <div className="px-6 py-4 flex justify-between border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-700 font-bold">{user.posts}</p>
            <p className="text-gray-500 text-sm">Posts</p>
          </div>
          <div className="text-center">
            <p className="text-gray-700 font-bold">{user.followers}</p>
            <p className="text-gray-500 text-sm">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-gray-700 font-bold">{user.following}</p>
            <p className="text-gray-500 text-sm">Following</p>
          </div>
        </div>
      </div>
    </main>
  );
}
