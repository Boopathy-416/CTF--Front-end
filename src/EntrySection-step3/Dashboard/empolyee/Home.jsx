import React from "react";
import { useNavigate } from "react-router-dom";

export default function EmployeeHome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-3xl font-bold mb-4">Welcome, Employee</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        You can now manage collections, record payments, and view performance stats.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
      >
        Logout
      </button>
    </div>
  );
}
