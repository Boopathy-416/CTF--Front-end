import React from "react";

export function Button({ variant = "default", size = "md", className = "", ...props }) {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-black hover:bg-gray-100",
    ghost: "text-black hover:bg-gray-100",
  };
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    icon: "p-2 w-10 h-10",
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />
  );
}
