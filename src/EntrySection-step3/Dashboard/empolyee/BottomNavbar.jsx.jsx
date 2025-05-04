import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Search, Bell, User, ScanBarcode } from "lucide-react";
import { gsap } from "gsap";

const navItems = [
  { icon: Home, label: "Home", path: "/dashboard/employee/home" },
  { icon: Search, label: "Search", path: "/dashboard/employee/search" },
  { icon: ScanBarcode, label: "Scan", path: "/dashboard/employee/scan" },
  { icon: Bell, label: "Notifications", path: "/dashboard/employee/notifications" },
  { icon: User, label: "Profile", path: "/dashboard/employee/profile" },
];

<div className="flex justify-center p-4">
<button
  onClick={() => navigate("/")}
  className="bg-black text-white px-6 py-2 rounded hover:bg-green-600"
>
  Logout
</button>
</div>

export default function BottomNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);

  const handleNavigation = (path) => {
    const page = document.querySelector(".page-content");
    if (page) {
      const tl = gsap.timeline();
      tl.to(page, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        onComplete: () => {
          navigate(path);
        },
      });
    } else {
      navigate(path);
    }
  };

  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current.children, {
        y: 5,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.2,
      });
    }
  }, []);

  useEffect(() => {
    const page = document.querySelector(".page-content");
    if (page) {
      gsap.to(page, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.1,
      });
    }
  }, [location.pathname]);

  return (
    <div
      ref={navRef}
      className="fixed bottom-0 left-0 right-0 max-w-md mx-auto h-18 rounded-t-full   shadow-xl  bg-blue-800 border-t border-gray-700 flex items-center justify-around px-2 z-50"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;

        return (
          <button
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            className={`flex flex-col  items-center justify-center w-full text-xs ${
              isActive ? "text-amber-500" : "text-white"
            }`}
          >
            <Icon className="h-6 font-bold w-6 text my-1 " />
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
