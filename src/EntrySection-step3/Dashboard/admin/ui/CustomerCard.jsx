import { CalendarDays } from "lucide-react";

export default function CustomerCard({ customer, daysCount, onImageClick }) {
  return (
    <div className="customer-card bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
      <div className="relative w-12 h-12 rounded-full overflow-hidden">
        <img
          src={customer.photo ? `${import.meta.env.VITE_API_BASE_URL}/uploads/${customer.photo}` : '/placeholder.svg'}
          alt={customer.name}
          className="object-cover w-full h-full cursor-pointer"
          onClick={() => onImageClick(customer.photo)} // Open full image in modal
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{customer.name}</h3>
        <p className="text-sm text-gray-600">Phone: {customer.phone}</p>
        <p className="text-sm text-gray-600">Amount: ₹{customer.amount}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <button className="text-sm text-blue-500 hover:underline">
          Active
        </button>
        {/* Replaced Delete button with Days Count button */}
        <button className="text-sm text-green-500 hover:underline">
          <CalendarDays /> {daysCount}
        </button>
      </div>
    </div>
  );
}
