import React, { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Label from "../ui/Label";
import Select from "../ui/Select";
import Card from "../ui/Card";

export default function EmployeeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Employee added successfully! Connect your backend API to save the data.");
    }, 1500);
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title>Employee Registration</Card.Title>
        <Card.Description>Add a new employee to your system</Card.Description>
      </Card.Header>
      <form onSubmit={handleSubmit}>
        <Card.Content className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="Enter first name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Enter last name" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter email address" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="Enter phone number" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="position">Position</Label>
              <Input id="position" placeholder="Enter position" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select id="department" defaultValue="sales" options={["Sales", "Marketing", "IT", "Finance", "HR"]} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="joiningDate">Joining Date</Label>
            <Input id="joiningDate" type="date" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="salary">Salary</Label>
            <Input id="salary" type="number" placeholder="Enter salary" required />
          </div>
        </Card.Content>
        <Card.Footer>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Adding Employee..." : "Add Employee"}
          </Button>
        </Card.Footer>
      </form>
    </Card>
  );
}
