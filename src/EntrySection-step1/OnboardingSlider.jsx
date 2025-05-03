import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChevronRight } from "lucide-react";
import RoleSelection from "../EntrySection-step2/RoleSelection";
import Button from "../components/ui/Button";

export default function OnboardingSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showRoleSelection, setShowRoleSelection] = useState(false);
  const slideRefs = useRef([]);

  const slides = [
    {
      image: "src/assets/fin1 (1).png",
      title: "Streamlined Collection Process",
      description:
        "Easily manage daily, weekly, or monthly collections without paperwork. Employees can record payments instantly on the go.",
    },
    {
      image: "src/assets/fin1 (2).png",
      title: "Real-time Analytics Dashboard",
      description:
        "Track your business performance with powerful analytics. Get insights on collections, payments, and customer behavior.",
    },
    {
      image: "src/assets/fin1 (3).png",
      title: "Secure Payment Processing",
      description:
        "Process payments securely with end-to-end encryption. Support for multiple payment methods and instant reconciliation.",
    },
  ];

  useEffect(() => {
    slideRefs.current.forEach((slide, index) => {
      if (slide) {
        gsap.set(slide, {
          opacity: index === currentSlide ? 1 : 0,
          x: index === currentSlide ? 0 : 100,
        });
      }
    });
  }, []);

  useEffect(() => {
    slideRefs.current.forEach((slide, index) => {
      if (slide) {
        if (index === currentSlide) {
          gsap.to(slide, {
            opacity: 1,
            x: 0,
          });
        } else {
          gsap.to(slide, {
            opacity: 0,
            x: index < currentSlide ? -100 : 100,
          });
        }
      }
    });
  }, [currentSlide]);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setShowRoleSelection(true);
    }
  };

  if (showRoleSelection) {
    return <RoleSelection />;
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex-1 relative overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={(el) => (slideRefs.current[index] = el)}
            className="absolute inset-0 flex flex-col items-center justify-center px-6"
            style={{ opacity: index === 0 ? 1 : 0 }}
          >
            {/* <div className="w-full max-w-[280px] h-[280px] relative mb-8">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-contain"
                priority={index === 0}
              />
            </div> */}
            <div className="w-full max-w-[280px] h-[240px] mb-8 flex items-center justify-center">
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                className="max-w-full max-h-full object-contain"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>

            <h1 className="text-2xl font-bold text-center mb-3">
              {slide.title}
            </h1>

            <p className="text-sm text-center text-gray-600 mb-6 max-w-[300px]">
              {slide.description}
            </p>

            <div className="flex justify-center space-x-2 mt-4">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === currentSlide ? "w-8 bg-blue-500" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-6">
        
        <Button
          className="w-full h-14 text-lg rounded-full bg-blue-500 hover:bg-blue-600"
          onClick={handleNext}
        >
          Next
          <ChevronRight className=" h-5 w-5 inline" />
        </Button>
      </div>
    </div>
  );
}
