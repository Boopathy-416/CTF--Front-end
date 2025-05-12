import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Mock data - replace with your API data later
const employees = [
  { id: 1, name: "Michael Brown", position: "Manager", department: "Sales" },
  { id: 2, name: "Sarah Wilson", position: "Developer", department: "IT" },
  { id: 3, name: "David Miller", position: "Accountant", department: "Finance" },
];

export default function EmployeeGallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      const cards = galleryRef.current.querySelectorAll(".employee-card");

      gsap.from(cards, {
        y: 30,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {employees.map((employee) => (
        <div
          key={employee.id}
          className="employee-card bg-white p-4 rounded-lg shadow-sm"
        >
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3">
              <img
                src="/placeholder.svg"
                alt={employee.name}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="font-semibold text-center">{employee.name}</h3>
            <p className="text-sm text-gray-600 text-center">{employee.position}</p>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mt-1">
              {employee.department}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
