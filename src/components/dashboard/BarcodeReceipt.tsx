import React from "react";
import Barcode from "react-barcode";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const BarcodeReceipt = () => {
  const receiptData = {
    fileNo: "ARN20240315001",
    applicantName: "Praveen Kumar",
    passportNo: "A12345678",
    mobileNo: "+91 8138832260",
    serviceName: "Visa Service",
    serviceSubtype: "Tourist Visa",
    centerName: "Kuwait City",
    checkInTime: "10:30 AM",
    paymentDateTime: "2025-03-13 14:45:00",
    consularFee: 100,
    consularSurcharge: 50,
    serviceFee: 25,
    taxes: 10,
    bankCharges: 30,
  };

  // Calculate totals
  const totalI = receiptData.consularFee + receiptData.consularSurcharge;
  const totalII = receiptData.serviceFee + receiptData.taxes;
  const grandTotal = totalI + totalII + receiptData.bankCharges;

  return (
    <Dialog>
      <DialogTrigger>
        <Badge className="cursor-pointer w-full hover:underline" variant="outline">
          View Receipt
        </Badge>
      </DialogTrigger>
      <DialogContent className="p-0 !max-w-3xl overflow-y-auto h-[40rem]">
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-center">
            Indian Consular Application Center<br/>(Country)
          </h2>
          <p className="text-center text-lg font-semibold pb-4">
            SP: Alhind Tours and Travels
          </p>
          <h2 className="text-xl font-bold text-center mb-4">Fee Receipt</h2>

          <div className="px-6">
            {/* Applicant Details */}
            <div className="mb-4 border-b pb-2">
              <h3 className="text-lg font-semibold">Applicant Details</h3>
              <div className="flex justify-between">
                <p><strong>File / ARN No.:</strong> {receiptData.fileNo}</p>
                <p><strong>Name:</strong> {receiptData.applicantName}</p>
              </div>
              <div className="flex justify-between">
                <p><strong>Passport No.:</strong> {receiptData.passportNo}</p>
                <p><strong>Mobile No.:</strong> {receiptData.mobileNo}</p>
              </div>
            </div>

            {/* Service Details */}
            <div className="mb-4 border-b pb-2">
              <h3 className="text-lg font-semibold">Service Details</h3>
              <div className="flex justify-between">
                <p><strong>Name:</strong> {receiptData.serviceName}</p>
                <p><strong>Subtype:</strong> {receiptData.serviceSubtype}</p>
              </div>
              <div className="flex justify-between">
                <p><strong>Center:</strong> {receiptData.centerName}</p>
                <p><strong>Check-in Time:</strong> {receiptData.checkInTime}</p>
              </div>
              <div className="flex justify-between">
                <p><strong>Payment Date/Time:</strong> {receiptData.paymentDateTime}</p>
              </div>
            </div>

            {/* Payment Details */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Payment Details</h3>
              <div className="flex justify-between">
                <p><strong>Consular Fee:</strong> ₹{receiptData.consularFee}</p>
                <p><strong>Consular Surcharge:</strong> ₹{receiptData.consularSurcharge}</p>
              </div>
              <div className="flex justify-between font-bold">
                <p>Total (I):</p>
                <p>₹{totalI}</p>
              </div>
              <div className="flex justify-between">
                <p><strong>Service Fee:</strong> ₹{receiptData.serviceFee}</p>
                <p><strong>Taxes:</strong> ₹{receiptData.taxes}</p>
              </div>
              <div className="flex justify-between font-bold">
                <p>Total (II):</p>
                <p>₹{totalII}</p>
              </div>
              <div className="flex justify-between">
                <p><strong>Bank/Agency Charges:</strong> ₹{receiptData.bankCharges}</p>
              </div>
              <div className="border-t border-gray-300 pt-2 flex justify-between font-bold text-lg">
                <p>Grand Total:</p>
                <p>₹{grandTotal}</p>
              </div>
            </div>
          </div>

          {/* Barcode */}
          <div className="flex flex-col items-center my-4">
            <Barcode value={receiptData.fileNo} />
            <p className="text-sm text-gray-500">Scan Barcode for details</p>
          </div>

          {/* Print Button */}
          <div className="text-center">
            <Button onClick={() => window.print()} className="px-4 py-2 font-semibold rounded-lg">
              Print Receipt
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BarcodeReceipt;
