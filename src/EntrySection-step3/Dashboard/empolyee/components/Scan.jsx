import React, { useState } from "react";
import {  Copy,  Check, IndianRupee, UserCircle, ScanQrCodeIcon } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/Dialog";
import Qr from "../../../../assets/my Account.jpg"


export default function Scan() {
  const [amount, setAmount] = useState("");
  const [amountSet, setAmountSet] = useState(false);
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const upiId = "boopathy1865-1@okasis";
  const receiverName = "Boopathy E";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-[100dvh] px-2 "
    style={{
      background: "linear-gradient(135deg, #e0f2ff 0%, #90cdf4 50%, #3182ce 100%)",
      clipPath: "ellipse(150% 100% at 100%)", // gives an oval, cursive-like shape from left-bottom
    }}>
      {/* Header */}
      <header className="relative flex items-center justify-center py-6 ">
        <Button variant="ghost" size="icon" className="absolute left-2" onClick={() => window.history.back()}>
          <ScanQrCodeIcon className="h-8 w-8 " />
        </Button>

        <h1 className="text-xl font-semibold">Payment QR</h1>

        <Dialog>
          <DialogTrigger setOpen={setOpen}>
            <Button variant="outline"   size="sm" className="absolute right-2 flex shadow-xl items-center gap-1">
              <IndianRupee className="h-4 w-4" />
            Edit
            </Button>
          </DialogTrigger>
          <DialogContent open={open} setOpen={setOpen}>
            <DialogHeader>
              <DialogTitle>Set Payment Amount</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-2">
              <Input
                type="number"
                placeholder="Enter INR ₹"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <Button
                className="w-full shadow-2xl shadow-blue-600"
                onClick={() => {
                  if (amount.trim() !== "") {
                    setAmountSet(true);
                    setOpen(false);
                  }
                }}
              >
                Confirm
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 space-y-6">
        <div className="flex items-center gap-2">
          <UserCircle className="h-5 w-5" />
          <span className="font-medium uppercase  tracking-widest ">{receiverName}</span>
        </div>

        <div className="bg-[#f3f6ff] rounded-lg p-4 shadow-xl shadow-blue-950 w-64 h-64 flex items-center justify-center">
          <img src={Qr} alt="Payment QR Code" className="w-full h-full" />
        </div>

        {amountSet && amount && (
          <div className="text-center">
            <span className="font-semibold text-lg">₹{amount}</span>
          </div>
        )}

        <p className="text-center text-shadow-2xs text-xs text-gray-600">Scan to pay with any UPI apps</p>

        <div className="flex items-center font-semibold text-center px-4 py-0 shadow-2xl shadow-white  gap-2 bg-transparent border-1 border-white  rounded-md">
          <span className="text-xs">UPI ID: {upiId}</span>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={copyToClipboard}>
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </main>

      <footer className="p-4 flex justify-center">
        <div className="h-10 w-10">
          <img src="/PNG Logo.png" alt="Company Logo" className="w-full h-full" />
        </div>
      </footer>
    </div>
  );
}
