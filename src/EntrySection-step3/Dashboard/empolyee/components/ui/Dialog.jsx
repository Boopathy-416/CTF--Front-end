import React, { useState } from "react";

export function Dialog({ children }) {
  return <>{children}</>;
}

export function DialogTrigger({ children, setOpen }) {
  return React.cloneElement(children, {
    onClick: () => setOpen(true),
  });
}

export function DialogContent({ open, setOpen, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 font-semibold bg-transparent   flex justify-center items-center z-50">
      <div className="backdrop-blur-sm  rounded-lg p-4 w-80 relative">
        <button
          className="absolute  top-2 right-2 text-red-800 py-1 px-2 shadow-black shadow-xs border-2 rounded-full"
          aria-label="Close"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}
