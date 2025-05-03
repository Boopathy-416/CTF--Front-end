import React from "react"

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-md font-medium focus:outline-none transition-all ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
