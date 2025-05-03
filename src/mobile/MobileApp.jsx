import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoleSelection from "../EntrySection-step2/RoleSelection";
import LoginPage from "../EntrySection-step3/login/role/LoginPage";
import AdminHome from "../EntrySection-step3/Dashboard/admin/Home";
import EmployeeHome from "../EntrySection-step3/Dashboard/empolyee/Home";
import Dashboard from "../pages/Dashboard";

function MobileApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/" element={<RoleSelection />} /> */}
        <Route path="/login/:role" element={<LoginPage />} />
        <Route path="/dashboard/admin" element={<AdminHome />} />
        <Route path="/dashboard/employee" element={<EmployeeHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MobileApp;
