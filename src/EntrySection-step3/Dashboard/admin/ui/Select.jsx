import { useState } from "react";

export function Select({ defaultValue = "", children }) {
  const [value, setValue] = useState(defaultValue);
  return children({ value, setValue });
}

export function SelectTrigger({ children, className = "" }) {
  return <div className={`border px-3 py-2 rounded-md cursor-pointer ${className}`}>{children}</div>;
}

export function SelectValue({ placeholder }) {
  return <span className="text-gray-500">{placeholder}</span>;
}

export function SelectContent({ children }) {
  return <div className="mt-2 border rounded-md shadow-md bg-white p-2">{children}</div>;
}

export function SelectItem({ value, children, onSelect }) {
  return (
    <div
      className="px-2 py-1 hover:bg-blue-100 rounded cursor-pointer"
      onClick={() => onSelect?.(value)}
    >
      {children}
    </div>
  );
}