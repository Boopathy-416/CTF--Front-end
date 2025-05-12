

export function Button({ type = "button", className = "", disabled, children, ...props }) {
  return (
    <button
      type={type}
      className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}