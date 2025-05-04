import React from "react";
import { Outlet, useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import BottomNavbar from "./BottomNavbar.jsx";

function EmployeeHome() {
  const navigate = useNavigate(); // ✅ Hook must be used inside the function component body

  return (
    <div className="min-h-screen bg-white relative">
      <div className="page-content  ">
        <Outlet />
      </div>

      <div className="flex justify-center p-4">
        <button
          onClick={() => navigate("/")}
          className="bg-black text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Logout
        </button>
      </div>

      <BottomNavbar />
    </div>
  );
}

export default EmployeeHome;
