import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  BarChart3,
  Users,
  CreditCard,
  Calendar,
  LogOut,
  Bell,
} from "lucide-react";
import Button from "../../../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../components/Greetings";
import MonthlyCollection from "../components/MonthlyCollection";
import YearlyCollection from "../components/YearlyCollection";
import CounterCard from "../components/CounterCard";
import CustomerGallery from "../components/CustomerGallery";
import EmployeeGallery from "../components/EmployeeGallery";

export default function AdminHero() {
  const navigate = useNavigate();
  const dashboardRef = useRef(null);

  useEffect(() => {
    if (dashboardRef.current) {
      const elements = dashboardRef.current.querySelectorAll(".animate-item");

      gsap.fromTo(
        dashboardRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      );

      gsap.fromTo(
        elements,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.2,
        }
      );
    }
  }, []);

  return (
    <div ref={dashboardRef} className="min-h-full  bg-gray-50">
      <div className="container  mx-auto px-4 py-6">
        <ProfileHeader />
        {/* Other admin dashboard content */}
      </div>

      {/* Main content */}
      <main className="p-4">
        <MonthlyCollection />

        <YearlyCollection />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
          <CounterCard title="Total Employees" count={2} icon="briefcase" />
          <CounterCard title="Total Customers" count={486} icon="users" />
        </div>


          <CustomerGallery />
        {/* <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Customer Gallery</h2>
        </div> */}

          <EmployeeGallery />
 {/* <div className="mt-8 mb-20">
          <h2 className="text-xl font-semibold mb-4">Employee Gallery</h2>
        </div> */}
        {/* Dashboard content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-5 animate-item">
            <h2 className="text-lg font-semibold mb-4">Collection Overview</h2>
            <div className="h-64 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
              <p className="text-gray-400">Chart visualization would go here</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 animate-item">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 pb-3 border-b border-gray-100"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      New employee registered
                    </p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
