



export function Input({ id, type = "text", placeholder = "", className = "", ...props }) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}
