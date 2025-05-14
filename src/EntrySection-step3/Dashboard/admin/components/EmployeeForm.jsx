import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import { Select } from "../ui/Select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/Card";
import { IndianRupee } from "lucide-react";

export default function EmployeeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [salary, setSalary] = useState("");
  const [message, setMessage] = useState("");
  const [performance, setPerformance] = useState("average"); // can be 'low', 'average', 'high'

  const handleSalaryChange = (e) => {
    const value = e.target.value;
    setSalary(value);

    const salaryNum = Number(value);

    // Basic validation
    if (salaryNum < 10000) {
      setMessage("Salary must be above 10,000.");
    } else if (salaryNum > 25000) {
      setMessage("Salary must be below 25,000.");
    } else {
      // Optional: Add performance-based message
      if (performance === "2+ Experience") {
        setMessage("High performance: Eligible for salary.");
      } else if (performance === "Fresher") {
        setMessage("Low performance: Review before approval.");
      } else {
        setMessage("Salary is within range.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert(
        "Employee added successfully! Connect your backend API to save the data."
      );
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Employee Registration</CardTitle>
        <CardDescription>Application Form</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
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
            <Input
              id="email"
              type="email"
              placeholder="Enter email address"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number +91 </Label>
            <Input id="phone" placeholder="Enter phone number" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <Select
              id="department"
              defaultValue="Sales"
              options={["Collection Agent", "Office Accountants"]}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="joiningDate">Joining Date</Label>
            <Input id="joiningDate" type="date" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="salary">
              Salary <IndianRupee className="inline w-3 h-auto text-black " />
            </Label>
            <input
              id="salary"
              type="number"
              placeholder="Enter salary"
              required
              value={salary}
              onChange={handleSalaryChange}
              className="border border-gray-300 rounded px-3 py-2"
            />
            <select
              value={performance}
              onChange={(e) => setPerformance(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            >
              <option value="low">Fresher</option>
              <option value="average">2+ Exp</option>
              <option value="high">5+ Exp</option>
            </select>

            {message && <p className="text-sm text-blue-600">{message}</p>}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Adding Employee..." : "Add Employee"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
