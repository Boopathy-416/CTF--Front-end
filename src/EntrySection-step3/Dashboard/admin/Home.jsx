
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { BarChart3, Users, CreditCard, Calendar, LogOut, Bell } from "lucide-react";
import Button from "../../../components/ui/Button"
import { useNavigate } from "react-router-dom";

export default function AdminHome() {
  const navigate = useNavigate();
  const dashboardRef = useRef(null);

  useEffect(() => {
    if (dashboardRef.current) {
      const elements = dashboardRef.current.querySelectorAll(".animate-item");

      gsap.fromTo(dashboardRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" });

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

  const handleLogout = () => {
    gsap.to(dashboardRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      onComplete: () => {
        navigate("/");
      },
    });
  };

  return (
    <div ref={dashboardRef} className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold animate-item">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
      
          <Button variant="ghost" size="icon" className="relative animate-item">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          <Button variant="outline" size="sm" className="animate-item" onClick={handleLogout}>
            <LogOut className="h-5 w-5 mr-2" />
            
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="p-4">
        {/* Stats overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { title: "Today Total Amount", icon: <Users className="h-5 w-5 text-blue-500" />, value: "1,248", change: "+12%", trend: "text-green-500" },
            { title: "weekly Total Amount", icon: <CreditCard className="h-5 w-5 text-green-500" />, value: "$24,500", change: "+8%", trend: "text-green-500" },
            { title: "Today Collections", icon: <Calendar className="h-5 w-5 text-purple-500" />, value: "867", change: "-3%", trend: "text-red-500" },
            { title: "Avg. Collection", icon: <BarChart3 className="h-5 w-5 text-orange-500" />, value: "$28.35", change: "+5%", trend: "text-green-500" },
          ].map(({ title, icon, value, change, trend }, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-sm animate-item">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-500 text-sm">{title}</h3>
                {icon}
              </div>
              <p className="text-2xl font-bold mt-2">{value}</p>
              <p className={`text-xs ${trend} mt-1`}>{change} from last month</p>
            </div>
          ))}
        </div>

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
                <div key={item} className="flex items-start gap-3 pb-3 border-b border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">New employee registered</p>
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
