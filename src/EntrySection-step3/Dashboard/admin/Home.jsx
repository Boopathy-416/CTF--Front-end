import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminHome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-3xl font-bold mb-4">Welcome, Admin</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        You have full access to user management, system configuration, and reports.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Logout
      </button>
    </div>
  );
}
