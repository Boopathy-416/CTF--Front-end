import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { gsap } from "gsap";
import { ArrowLeft, Eye, EyeOff, User, Lock } from "lucide-react";

export default function LoginPage() {
  const { role } = useParams();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (role !== "admin" && role !== "employee") {
      navigate("/");
      return;
    }

    if (formRef.current) {
      gsap.fromTo(formRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 });
    }
  }, [role, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) return;

    setIsLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1500)); // Simulate API
      navigate(`/dashboard/${role}`);
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  const roleDisplay = role?.charAt(0).toUpperCase() + role?.slice(1);

  return (
    <div className="flex flex-col h-screen bg-white p-6">
      <div className="mb-8">
        <button
          onClick={() => navigate(-1)}
          className="h-8 w-8 flex items-center justify-center rounded hover:bg-gray-100"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Back</span>
        </button>
      </div>

      <div ref={formRef} className="flex-1 flex flex-col">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Login to your Account</h1>
          <p className="text-gray-500 text-sm">
            {role === "admin" ? "Admin access portal" : "Employee portal access"}
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium">Username</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-blue-500" />
              </div>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-3 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-blue-500" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center"
              >
                {showPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
                <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-auto mb-4 text-center">
          <p className="text-sm text-gray-600">
            If you have already account{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-500 font-medium cursor-pointer"
            >
              Signup
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
