import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoleSelection from "../EntrySection-step2/RoleSelection";
import LoginPage from "../EntrySection-step3/login/role/LoginPage";
import AdminHome from "../EntrySection-step3/Dashboard/admin/Home";
import EmployeeHome from "../EntrySection-step3/Dashboard/empolyee/EmployeeHome";
import Dashboard from "../pages/Dashboard";
import SearchBar from "../EntrySection-step3/Dashboard/empolyee/components/SearchBox";
import Home from "../EntrySection-step3/Dashboard/empolyee/components/Home";
import { Scan } from "lucide-react";
import Notification from "../EntrySection-step3/Dashboard/empolyee/components/Notification";
import Profile from "../EntrySection-step3/Dashboard/empolyee/components/Profile";












function MobileApp() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/" element={<RoleSelection />} />
        <Route path="/login/:role" element={<LoginPage />} />
        <Route path="/dashboard/admin" element={<AdminHome />} />

        {/* Nested routing under employee layout */}
        <Route path="/dashboard/employee" element={<EmployeeHome />}>
          <Route path="home" element={<Home />} />
          <Route path="Search" element={<SearchBar />} />
          <Route path="Scan" element={<Scan />} />
          <Route path="Notifications" element={<Notification />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MobileApp;
