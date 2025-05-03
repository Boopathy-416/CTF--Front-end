import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { UserRound, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RoleSelection() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const adminRef = useRef(null);
  const employeeRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && adminRef.current && employeeRef.current) {
      gsap.fromTo(containerRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })

      gsap.fromTo(adminRef.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, delay: 0.3 })

      gsap.fromTo(employeeRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, delay: 0.5 })
    }
  }, [])

  const handleRoleSelect = (role) => {
    const selectedRef = role === "admin" ? adminRef.current : employeeRef.current;
    const otherRef = role === "admin" ? employeeRef.current : adminRef.current;

    if (selectedRef && otherRef) {
      gsap.to(otherRef, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
      });

      gsap.to(selectedRef, {
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        borderColor: role === "admin" ? "#3b82f6" : "#10b981",
        duration: 0.1,
        
      });

      setTimeout(() => {
        navigate(`/login/${role}`);
      }, 300);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white p-6" ref={containerRef}>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center mb-3">Choose Your Role</h1>
        <p className="text-sm text-center text-gray-600 mb-10 max-w-[300px]">
          Select your role to access the appropriate features and permissions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-md">
          <div
            ref={adminRef}
            className="border border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer"
            onClick={() => handleRoleSelect("admin")}
          >
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <UserRound className="h-8 w-8 text-blue-500" />
            </div>
            <h2 className="text-lg font-semibold text-center mb-2">Admin</h2>
            <p className="text-sm text-center text-gray-500">
              Full access to manage users, view reports, and configure system settings
            </p>
          </div>

          <div
            ref={employeeRef}
            className="border border-gray-200 rounded-xl p-6 hover:border-green-500 hover:shadow-md transition-all cursor-pointer"
            onClick={() => handleRoleSelect("employee")}
          >
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-500" />
            </div>
            <h2 className="text-lg font-semibold text-center mb-2">Employee</h2>
            <p className="text-sm text-center text-gray-500">
              Access to record payments, manage collections, and view your performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
