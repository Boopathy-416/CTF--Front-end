import CustomerForm from "../components/CustomerForm";



export default function AddCustomer() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Add Customer</h1>
      <CustomerForm /> 
    </main>
  )
}