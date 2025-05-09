import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { gsap } from "gsap";


const suggestions = [
  "Nature landscapes",
  "Mountain views",
  "Cloud formations",
  "Green hills",
  "Scenic routes",
  "Countryside views",
  "Blue skies",
  "Natural beauty",
  "Outdoor adventures",
  "Hiking trails",
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const suggestionsRef = useRef(null);
  const inputRef = useRef(null);



  useEffect(() => {
    if (query.trim() === "") {
      setFilteredSuggestions([]);
    } else {
      const filtered = suggestions.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    }
  }, [query]);

  useEffect(() => {
    if (showSuggestions && suggestionsRef.current) {
      gsap.fromTo(
        suggestionsRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3 }
      );
    }
  }, [showSuggestions]);

  useEffect(() => {
    if (inputRef.current) {
      gsap.from(inputRef.current, {
        width: "80%",
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
      });
    }
  }, []);

  const handleFocus = () => setShowSuggestions(true);

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-screen overflow-hidden h-[200svh]   py-10 mb-6"
    style={{
      background: "linear-gradient(135deg, #e0f2ff 0%, #90cdf4 50%, #3182ce 100%)",
      clipPath: "ellipse(150% 100% at 100%)", // gives an oval, cursive-like shape from left-bottom
    }}>
      <div className="relative px-2">
        <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="pl-15 pr-4 h-12 rounded-full border w-full "
        />
      </div>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute left-7 z-1 center  w-80 mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto"
        >
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onMouseDown={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
