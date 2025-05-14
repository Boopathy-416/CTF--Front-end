import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/Card";

export default function CustomerForm() {
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState(null);
  const [aadhaarParts, setAadhaarParts] = useState(["", "", "", ""]);
  const [photo, setPhoto] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAadhaarChange = (index, value) => {
    if (/^\d{0,4}$/.test(value)) {
      const newParts = [...aadhaarParts];
      newParts[index] = value;
      setAadhaarParts(newParts);
    }
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value !== "") {
      const numeric = parseFloat(value);
      setAmount(value);
      const interest = numeric * 0.125;
      const totalWithInterest = (numeric + interest).toFixed(2);
      setTotal(totalWithInterest);
    } else {
      setAmount("");
      setTotal(null);
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setPhoto(file);
    } else {
      alert("Only .jpg and .png formats are allowed.");
      e.target.value = null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isAadhaarValid = aadhaarParts.every((part) => part.length === 4);

    if (!isAadhaarValid) {
      alert("Please enter a valid 16-digit Aadhaar number.");
      return;
    }

    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("dob", e.target.dob.value);
    formData.append("phone", e.target.phone.value);
    formData.append("address", e.target.address.value);
    formData.append("aadhaar", aadhaarParts.join(""));
    formData.append("amount", amount);
    formData.append("totalWithInterest", total);
    if (photo) formData.append("photo", photo);

    try {
      setIsSubmitting(true);

      const res = await fetch(
        import.meta.env.VITE_API_BASE_URL + "/api/customers",
        {
          method: "POST",
          body: formData,
        }
      );

      let data;
      try {
        data = await res.json();
      } catch (err) {
        data = { message: "Server returned invalid JSON" };
      }

      setIsSubmitting(false);

      if (res.ok) {
        alert(data.message || "Customer added successfully!");
      } else {
        alert("❌ Error: " + (data.message || "Something went wrong"));
      }
    } catch (err) {
      setIsSubmitting(false);
      alert("Network error: " + err.message);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Form</CardTitle>
        <CardDescription>Add a new customer</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter full name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input id="dob" type="date" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number +91</Label>
            <Input id="phone" placeholder="Enter phone number" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Enter address" required />
          </div>

          <div className="space-y-2">
            <Label>Aadhaar Card Number</Label>
            <div className="flex gap-2">
              {aadhaarParts.map((part, i) => (
                <Input
                  key={i}
                  value={part}
                  onChange={(e) => handleAadhaarChange(i, e.target.value)}
                  maxLength={4}
                  required
                />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount (INR)</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter loan amount"
              required
            />
          </div>

          {total && (
            <div className="space-y-2">
              <Label>
                Total Amount with 12.5% Interest (Duration: 50 days)
              </Label>
              <Input value={`₹ ${total}`} readOnly />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="photo">Upload Photo (.jpg, .png)</Label>
            <Input
              id="photo"
              type="file"
              accept=".jpg,.png"
              onChange={handlePhotoUpload}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Add Customer"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
