import React from "react";

export default function ProfileHeader() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="flex justify-between items-center bg-gray-200 p-4 rounded-xl shadow">
      <div>
        <h1 className="text-xl font-light text-gray-800">{getGreeting()}, Admin</h1>
        <p className="text-black mt-1">Welcome to your dashboard.</p>
      </div>
      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200">
        <img
          src="/PNG Logo.png"
          alt="Admin Profile"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
