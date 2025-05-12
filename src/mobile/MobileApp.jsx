import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoleSelection from "../EntrySection-step2/RoleSelection";
import LoginPage from "../EntrySection-step3/login/role/LoginPage";
import EmployeeHome from "../EntrySection-step3/Dashboard/empolyee/EmployeeHome";
import Dashboard from "../pages/Dashboard";
import SearchBar from "../EntrySection-step3/Dashboard/empolyee/components/SearchBox";
import Scan from "../EntrySection-step3/Dashboard/empolyee/components/Scan";
import Notification from "../EntrySection-step3/Dashboard/empolyee/components/Notification";
import Profile from "../EntrySection-step3/Dashboard/empolyee/components/Profile";
// import AdminHero from "../EntrySection-step3/Dashboard/admin/AdminHome/AdminHero";
import DailyAnalytic from "../EntrySection-step3/Dashboard/admin/AdminNabar/DailyAnalytic";
import AddCustomer from "../EntrySection-step3/Dashboard/admin/AdminNabar/AddCustomer";
import AddEmployee from "../EntrySection-step3/Dashboard/admin/AdminNabar/AddEmployee";
import AdminLayout from "../EntrySection-step3/Dashboard/admin/AdminLayout/AdminLayout";
import AdminHero from "../EntrySection-step3/Dashboard/admin/AdminLayout/AdminHero";

function MobileApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/" element={<RoleSelection />} />
        <Route path="/login/:role" element={<LoginPage />} />

        {/* Admin Process */}
        <Route path="/dashboard/admin" element={<AdminLayout />}>
          <Route index element={<AdminHero />} />
          <Route path="AdminNavbar/analytics" element={<DailyAnalytic />} />
          <Route path="AdminNavbar/add-customer" element={<AddCustomer />} />
          <Route path="AdminNavbar/add-employee" element={<AddEmployee />} />
        </Route>
        {/* Nested routing under employee layout */}
        <Route path="/dashboard/employee" element={<EmployeeHome />}>
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
