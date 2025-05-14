


export function Card({ children, className = "" }) {
  return <div className={`bg-white rounded-lg shadow-md ${className}`}>{children}</div>;
}

export function CardHeader({ children }) {
  return <div className=" bg-green-200 px-4 py-3">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="text-xl font-semibold">{children}</h2>;
}

export function CardDescription({ children }) {
  return <p className="text-sm text-gray-500">{children}</p>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function CardFooter({ children }) {
  return <div className=" px-4 py-3">{children}</div>;
}
