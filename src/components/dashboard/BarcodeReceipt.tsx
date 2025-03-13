import React from "react";
import Barcode from 'react-barcode';
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const BarcodeReceipt = () => {
  const receiptData = {
    fileNo: "ARN20240315001",
    applicantName: "Praveen",
    passportNo: "A12345678",
    mobileNo: "+91 8138832260",
    serviceName: "Visa Service",
    consularFee: 100,
    consularSurcharge: 50,
    serviceFee: 25,
    bankCharges: 30,
  };

  // Calculate totals
  const totalI = receiptData.consularFee + receiptData.consularSurcharge;
  const grandTotal = totalI + receiptData.serviceFee + receiptData.bankCharges;

  return (
    <Dialog>
      <DialogTrigger>
        <Badge
          className="cursor-pointer w-full hover:underline"
          variant="outline"
        >
          View Receipt
        </Badge>
      </DialogTrigger>
      <DialogContent className="p-0">


      <div className=" bg-white shadow-lg rounded-lg p-4 border border-gray-200">
        <h2 className="text-2xl font-bold text-center ">
          Receipt
        </h2>

        <div className="mb-4">
          <h3 className="text-lg font-semibold border-b pb-1 mb-2">
            Applicant Details
          </h3>
          <div className="flex justify-between">
            <span className="font-medium">File / ARN No.:</span>
            <span>{receiptData.fileNo}</span>
          </div>
          <div className="flex justify-between">
            <span>Name of Applicant:</span>
            <span>{receiptData.applicantName}</span>
          </div>
          <div className="flex justify-between">
            <span>Passport No.:</span>
            <span>{receiptData.passportNo}</span>
          </div>
          <div className="flex justify-between">
            <span>Mobile No.:</span>
            <span>{receiptData.mobileNo}</span>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold border-b pb-1">
            Service Details
          </h3>
          <div className="flex justify-between">
            <span>Name of Service:</span>
            <span>{receiptData.serviceName}</span>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-bold">Payment Details</h3>
          <div className="flex justify-between">
            <span>Consular Fee:</span>
            <span>₹{receiptData.consularFee}</span>
          </div>
          <div className="flex justify-between">
            <span>Consular Surcharge:</span>
            <span>₹{receiptData.consularSurcharge}</span>
          </div>
          <div className="flex justify-between">
            <span>Service Fee:</span>
            <span>₹{receiptData.serviceFee}</span>
          </div>
          <div className="flex justify-between">
            <span>Bank/Agency Charges:</span>
            <span>₹{receiptData.bankCharges}</span>
          </div>
          <div className="border-t border-gray-300 mt-2 pt-2 flex justify-between font-bold">
            <span>Total:</span>
            <span>₹{grandTotal}</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Barcode value={receiptData.fileNo} />
          <p className="text-sm text-gray-500 mt-2">Scan Barcode for details</p>
        </div>

        <div className="text-center mt-4">
          <Button
            onClick={() => window.print()}
            className="mt-4 px-4 py-2  text-white font-semibold rounded-lg "
          >
            Print Receipt
          </Button>
        </div>
      </div>
      </DialogContent>

    </Dialog>
  );
};

export default BarcodeReceipt;
