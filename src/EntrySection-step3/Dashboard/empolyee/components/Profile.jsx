import { User } from "lucide-react";
import React from "react";

function Profile() {
  return (
    <div className="page-content w-auto min-h-screen p-4" 
    style={{
      background: "linear-gradient(135deg, #e0f2ff 0%, #90cdf4 50%, #3182ce 100%)",
      clipPath: "ellipse(150% 100% at 100%)", // gives an oval, cursive-like shape from left-bottom
    }}>
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p>This is the profile page content.</p>

      <div className="flex flex-col items-center mt-6">
        <div className="w-24 h-24 rounded-full border-2 border-gray-700 bg-[#f1f5f9] mb-4 flex items-center justify-center">
          <User />
        </div>
        <h2 className="text-xl font-medium">User Name</h2>
        <p className="text-[#f1f5f9]-foreground">user@example.com</p>

        <div className="w-full mt-6 space-y-3">
          <div className="p-3 bg-[#f1f5f9] rounded-lg">Account Settings</div>
          <div className="p-3 bg-[#f1f5f9] rounded-lg">Privacy</div>
          <div className="p-3 bg-[#f1f5f9] rounded-lg">Notifications</div>
          <div className="p-3 bg-[#f1f5f9] rounded-lg">Help & Support</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
