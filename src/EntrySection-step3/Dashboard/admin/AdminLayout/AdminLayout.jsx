// src/EntrySection-step3/Dashboard/admin/AdminLayout.jsx
import { Outlet } from "react-router-dom";
import AdminNavbar from "../AdminNabar/AdminNavabar";


export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20"> {/* Add padding to prevent navbar overlap */}
      <Outlet />
      <AdminNavbar />
    </div>
  );
}
