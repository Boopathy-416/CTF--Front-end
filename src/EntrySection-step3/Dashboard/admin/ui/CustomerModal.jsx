

export default function CustomerModal({ image, onClose }) {
  return (
    <div className="modal fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="modal-content bg-white p-4 rounded-lg relative">
        <img
          src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${image}`}
          alt="Full-size Customer"
          className="max-w-full max-h-screen object-contain"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded-full"
        >
          Close
        </button>
      </div>
    </div>
  );
}
