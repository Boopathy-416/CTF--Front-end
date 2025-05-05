import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import BottomNavbar from "./BottomNavbar.jsx";
import { gsap } from "gsap";
import { LocationEditIcon, LogOut, MoveRight } from "lucide-react";

const thoughts = [
  "Stay focused and never give up.",
  "Every day is a new opportunity.",
  "Small steps lead to big results.",
  "Believe in your potential.",
  "Hard work beats talent.",
  "Progress over perfection.",
];

function getRandomThought() {
  return thoughts[Math.floor(Math.random() * thoughts.length)];
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

function EmployeeHome() {
  const navigate = useNavigate(); // ✅ Hook must be used inside the function component body
  const [currentTime, setCurrentTime] = useState(new Date());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isWorking, setIsWorking] = useState(false);
  const [dailyThought, setDailyThought] = useState("");

  useEffect(() => {
    setDailyThought(getRandomThought());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let timer;
    if (isWorking) {
      timer = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isWorking]);

  // GSAP wave-flash animation
  useEffect(() => {
    const btn = document.querySelector(".start-button");
    if (btn) {
      gsap.to(btn, {
        repeat: -1,
        yoyo: true,
        duration: 1,
        boxShadow: "0 0 25px rgba(0, 123, 255, 0.6)",
        scale: 1.05,
        ease: "power1.inOut",
      });
    }
    return () => {
      gsap.killTweensOf(".start-button");
    };
  }, []);

  const handleStartWork = () => {
    setIsWorking(true);
    navigate("/dashboard/employee/search");
  };

  return (
    <div className="min-h-screen bg-[#92bbf8] relative">
      <div className="page-content ">
        <Outlet />
      </div>
      <div className=" bg-[#92bbf8]  overflow-hidden p-4 h-full flex flex-col">
        <div className="flex justify-between  items-center p-2">
          <h1 className="text-3xl  font-extralight  p-2 ">
            {getGreeting()}👋
          </h1>
          
          <button
            // onClick={() => navigate("/")}
            className=" text-red-800 p-2"
          >
         <LocationEditIcon />  <span className="text-xs -mx-4 font-semibold text-green-900 underline underline-offset-2 tracking-loose  shadow-black " >Mumbai</span>
          </button>
        </div>

        <div className="flex  justify-center pb-4">
          <img
            src="https://res.cloudinary.com/dpm3bum4n/image/upload/v1746456317/empolyeehome_wclcuz.png"
            alt="Employee working"
            width={260}
            height={220}
          />
        </div>

        <button
          className="start-button bg-[#b57474] text-white text-xl py-6 px-12 rounded-2xl mb-8 transition-all"
          onClick={handleStartWork}
          disabled={isWorking}
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          ⚡ Start Work
        </button>

        <div className="bg-[#7aabf9] rounded-xl shadow-xl p-4 mb-8">
          <p className="text-gray-100 mb-1">Live Time Recorder</p>
          <p className="text-5xl font-bold">{formatTime(elapsedTime)}</p>
        </div>

        <div className="mt-auto rounded-xl shadow-xl p-4 bg-[#fbf9f5]  ">
          <h2 className="text-2xl font-bold mb-2">Moral of the day 📆</h2>
          <p className="text-xl italic">"{dailyThought}"</p>
        </div>
      </div>
      <div className="flex justify-center p-4">
        <button
          onClick={() => navigate("/")}
          className="bg-black text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Logout 
        </button>
      </div>

      <BottomNavbar />
    </div>
  );
}

export default EmployeeHome;
