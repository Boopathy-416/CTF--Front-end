import React, { useEffect, useRef } from "react";
import { Briefcase, Users } from "lucide-react";
import gsap from "gsap";

export default function CounterCard({ title, count, icon }) {
  const counterRef = useRef(null);
  const countRef = useRef(null);

  useEffect(() => {
    if (countRef.current) {
      const counter = { value: 0 };
      gsap.to(counter, {
        value: count,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = Math.round(counter.value).toString();
          }
        },
      });

      gsap.from(counterRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, [count]);

  return (
    <div
      ref={counterRef}
      className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center"
    >
      <div className="text-5xl font-bold mb-2" ref={countRef}>
        0 
      </div>
      <div className="text-gray-600 flex items-center gap-1">
        {icon === "users" ? <Users size={16} /> : <Briefcase size={16} />}
        <span>{title}</span>
      </div>
    </div>
  );
}
