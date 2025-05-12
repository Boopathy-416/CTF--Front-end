

export function Label({ htmlFor, children, className = "" }) {
  return (
    <label htmlFor={htmlFor} className={`block font-medium text-sm text-gray-700 ${className}`}>
      {children}
    </label>
  );
}