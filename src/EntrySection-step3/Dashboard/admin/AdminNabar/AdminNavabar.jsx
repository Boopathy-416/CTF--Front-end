import { Home, BarChart2, UserPlus, Users, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/dashboard/admin", icon: Home },
  { name: "Analytics", href: "/dashboard/admin/AdminNavbar/analytics", icon: BarChart2 },
  { name: "Add Customer", href: "/dashboard/admin/AdminNavbar/add-customer", icon: UserPlus },
  { name: "Add Employee", href: "/dashboard/admin/AdminNavbar/add-employee", icon: Users },
  { name: "Logout", href: "/", icon: LogOut },
];

export default function AdminNavbar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          if (index === 2) {
            // Special case for center "Add" button
            return (
              <Link key={item.name} to={item.href} className="flex flex-col items-center justify-center -mt-5">
                <div
                  className={`flex items-center justify-center w-14 h-14 rounded-full text-white ${
                    isActive ? "bg-blue-600" : "bg-blue-500"
                  }`}
                >
                  <Icon size={24} />
                </div>
              </Link>
            );
          }

          return (
            <Link key={item.name} to={item.href} className="flex flex-col items-center justify-center w-full">
              <div
                className={`flex flex-col items-center justify-center ${
                  isActive ? "text-blue-500" : "text-gray-500"
                }`}
              >
                <Icon size={24} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
} 