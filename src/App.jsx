import React from "react";
import MobileApp from "./mobile/MobileApp";
import "./App.css";
import deviceImage from "/LOGO.png"; // adjust path as needed

function App() {
  return (
    <>
      {/* Shown on large screens only */}
      <div
        id="desktop-blocker"
        className="hidden lg:flex flex-col h-screen justify-center items-center  p-4"
      >
        {/* Image on top */}
        <img
          src={deviceImage}
          alt="Mobile Only"
          className="w-50 h-auto mb-4 object-contain"
        />
        <h2 className="text-center text-xl font-semibold text-gray-700">
          This application is only viewable on mobile devices.
        </h2>
      </div>

      {/* Shown on mobile screens only */}
      <div id="mobile-app" className="block lg:hidden">
        <MobileApp />
      </div>
    </>
  );
}

export default App;
