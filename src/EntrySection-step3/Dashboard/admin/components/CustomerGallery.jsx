import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Mock data - replace with your API data later
const customers = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Active" },
  { id: 3, name: "Robert Johnson", email: "robert@example.com", status: "Inactive" },
  { id: 4, name: "Emily Davis", email: "emily@example.com", status: "Active" },
];

export default function CustomerGallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      const cards = galleryRef.current.querySelectorAll(".customer-card");

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
    <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {customers.map((customer) => (
        <div
          key={customer.id}
          className="customer-card bg-transparent p-4 rounded-lg shadow-sm flex items-center gap-4"
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <img
              src="/placeholder.svg"
              alt={customer.name}
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h3 className="font-semibold">{customer.name}</h3>
            <p className="text-sm text-gray-600">{customer.email}</p>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                customer.status === "Active"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {customer.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
