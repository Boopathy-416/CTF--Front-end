import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function EditCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    dob: "",
    phone: "",
    address: "",
    aadhaar: "",
    amount: "",
    totalWithInterest: "",
    photo: "",
    totalDays: 0,
    status: "Inactive",
  });

  const fetchCustomer = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/customers/${id}`
      );
      setCustomer(res.data);
    } catch (err) {
      console.error("Failed to fetch customer:", err.message);
      alert("Failed to fetch customer.");
    }
  };

  useEffect(() => {
    fetchCustomer();
  }, [id]);

  const calculateActiveStatus = (dob) => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const diffTime = currentDate - birthDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 30 ? "Active" : "Inactive";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", customer.name);
    formData.append("dob", customer.dob);
    formData.append("phone", customer.phone);
    formData.append("amount", customer.amount);
    formData.append("address", customer.address);
    formData.append("aadhaar", customer.aadhaar);
    formData.append("totalWithInterest", customer.totalWithInterest);

    if (customer.photo instanceof File) {
      formData.append("photo", customer.photo);
    }

    try {
      await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/api/customers/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      alert("Customer updated successfully!");
      navigate("/dashboard/admin");
    } catch (err) {
      console.error("Failed to update customer:", err.message);
      alert("Error updating customer.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCustomer((prev) => ({ ...prev, photo: file }));
    }
  };

  useEffect(() => {
    if (customer.dob) {
      const status = calculateActiveStatus(customer.dob);
      setCustomer((prev) => ({ ...prev, status }));
    }
  }, [customer.dob]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Edit Customer</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={customer.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={customer.dob}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="phone">Mobile Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="aadhaar">Aadhaar Number:</label>
          <input
            type="text"
            id="aadhaar"
            name="aadhaar"
            value={customer.aadhaar}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={customer.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={customer.amount}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Image upload and preview */}
        <div className="mb-4">
          <label className="block mb-2" htmlFor="photo">Profile Photo:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
          />
          {customer.photo && !(customer.photo instanceof File) && (
            <img
              src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${customer.photo}`}
              alt="Customer"
              className="mt-2 h-20 w-20 object-cover rounded"
            />
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Active Status:</label>
          <span className="text-sm">{customer.status}</span>
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded"
        >
          Update Customer
        </button>
      </form>
    </div>
  );
}
