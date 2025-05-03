import React from "react";
import MobileApp from "./mobile/MobileApp";
import "./App.css";

function App() {
  return (
    <>
      {/* Shown on large screens only */}
      <div id="desktop-blocker" className="hidden lg:flex h-screen justify-center items-center bg-gray-100 p-4">
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
