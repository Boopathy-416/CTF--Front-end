import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import BottomNavbar from "./BottomNavbar.jsx";
import { gsap } from "gsap";
import {  LucideMoveRight, MenuIcon, } from "lucide-react";

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
        boxShadow: "0 10 50px rgba(0, 123, 255, 0.9)",
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
    <div className="min-h-screen bg-[#ffffff]  relative">
      <div className="page-content ">
        <Outlet />
      </div>
      <div className="  overflow-hidden p-4 h-full flex flex-col">
        <div className="flex justify-between  items-center p-2">
<MenuIcon  className=" text-gray-800 " />

          <h1 className="text-shadow-xs  font-bold  p-2 ">CONNECTOFIN </h1>

          <button
            // onClick={() => navigate("/")}
            className=" text-white border-2 rounded-full font-black bg-black  p-1"
          >
            <LucideMoveRight />
  
          </button>
        </div>

        {/* <div className="flex  justify-center ">
          <img
            src="https://media.giphy.com/media/LqUx9iazNy50fjlMpR/giphy.gif?cid=ecf05e474quojiztyyptt1d49zfsefsp486rba8w9pnxg1av&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="Employee working"
            width={260}
            height={220}
          />
        </div> */}
        <div className="flex  justify-center py-4">
          <button
            className="start-button bg-[#345de9] border-4 border-[#4a4a4a80] shadow-blue-700 shadow-2xl 
           text-white text-md font-bold w-40 h-40 uppercase rounded-full flex items-center text-center justify-center transition-all mb-8"
            onClick={handleStartWork}
            disabled={isWorking}
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            start to work
          </button>
        </div>

        <div className="bg-[#c5d3e8a4] text-center rounded-xl shadow-xl p-4 mb-8">
          <p className="text-gray-800 font-semibold mb-1">
            Live work Time Recorder
          </p>
          <p className="text-5xl font-bold">{formatTime(elapsedTime)}</p>
        </div>

        <div className="mt-auto text-center   p-4 bg-[#fbf9f5]  ">
          <h2 className="text-sm font-bold mb-2">Moral of the day 📆</h2>
          <p className="text-xs italic">"{dailyThought}"</p>
        </div>
      </div>
      <div className="flex justify-center p-4">
        <img
                  src="/PNG Logo.png"
          // src="https://media.giphy.com/media/LqUx9iazNy50fjlMpR/giphy.gif?cid=ecf05e474quojiztyyptt1d49zfsefsp486rba8w9pnxg1av&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt="Employee working"
          width={120}
          height={120}
        />
      </div>

      <BottomNavbar />
    </div>
  );
}

export default EmployeeHome;
