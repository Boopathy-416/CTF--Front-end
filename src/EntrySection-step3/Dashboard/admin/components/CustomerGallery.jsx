
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import gsap from 'gsap';
// import CustomerCard from '../ui/CustomerCard';
// import CustomerModal from '../ui/CustomerModal';


// export default function CustomerGallery() {
//   const [customers, setCustomers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState('');


//   const fetchCustomers = async () => {
//     try {
//       const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/customers`);
//       setCustomers(res.data);
//     } catch (err) {
//       console.error("Failed to fetch customers:", err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleDeleteClick = async (customerId) => {
//     if (window.confirm("Are you sure you want to delete this customer?")) {
//       try {
//         const res = await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/customers/${customerId}`);
//         if (res.status === 200) {
//           setCustomers(customers.filter((customer) => customer._id !== customerId));
//           alert("Customer deleted successfully!");
//         }
//       } catch (err) {
//         console.error("Failed to delete customer:", err.message);
//         alert("Error deleting customer.");
//       }
//     }
//   };

//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   useEffect(() => {
//     if (!loading) {
//       gsap.from(".customer-card", {
//         y: 30,
//         opacity: 0,
//         duration: 0.6,
//         stagger: 0.1,
//         ease: "power3.out",
//       });
//     }
//   }, [loading]);

//   if (loading) return <p className="text-center mt-4">Loading customers...</p>;

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">All Customers</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {customers.map((customer) => (
//           <CustomerCard
//             key={customer._id}
//             customer={customer}
//             onImageClick={handleImageClick}
//             onDeleteClick={handleDeleteClick}
//           />
//         ))}
//       </div>

//       {/* Modal for full-size image */}
//       {isModalOpen && <CustomerModal image={selectedImage} onClose={handleCloseModal} />}
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import gsap from 'gsap';
import CustomerCard from '../ui/CustomerCard';
import CustomerModal from '../ui/CustomerModal';

export default function CustomerGallery() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const fetchCustomers = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/customers`);
      setCustomers(res.data);
    } catch (err) {
      console.error('Failed to fetch customers:', err?.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };



  useEffect(() => {
    fetchCustomers();
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.from('.customer-card', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }
  }, [loading]);

  if (loading) return <p className="text-center mt-4">Loading customers...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Customers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {customers.map((customer) => (
          <CustomerCard
            key={customer._id}
            customer={customer}
             daysCount={customer.daysCount}
            onImageClick={handleImageClick}

          />
        ))}
      </div>

      {/* Modal for full-size image */}
      {isModalOpen && <CustomerModal image={selectedImage} onClose={handleCloseModal} />}
    </div>
  );
}
