import React from "react";

const FeeCard = () => {
  // Payment details
  const paymentDetails = {
    consularFee: 100, // (a) Consular fee
    consularSurcharge: 20, // (b) Consular surcharge
    serviceFee: 30, // (c) Service Fee
    taxes: 5, // (d) Taxes
    bankCharges: 10, // (e) Bank/Agency charges
  };

  // Calculate totals
  const totalI = paymentDetails.consularFee + paymentDetails.consularSurcharge;
  const totalII = paymentDetails.serviceFee + paymentDetails.taxes;
  const grandTotal = totalI + totalII + paymentDetails.bankCharges;

  return (
    <div className=" bg-white  rounded-lg p-6 pt-1 border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
        Fees
      </h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Consular Fee:</span>
          <span>AED{paymentDetails.consularFee}</span>
        </div>
        <div className="flex justify-between">
          <span>Consular Surcharge:</span>
          <span>AED{paymentDetails.consularSurcharge}</span>
        </div>
        <hr />
        <div className="flex justify-between font-semibold">
          <span>Total (I):</span>
          <span>AED{totalI}</span>
        </div>
        <hr />
        <div className="flex justify-between">
          <span>Service Fee:</span>
          <span>AED{paymentDetails.serviceFee}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes:</span>
          <span>AED{paymentDetails.taxes}</span>
        </div>
        <hr />
        <div className="flex justify-between font-semibold">
          <span>Total (II):</span>
          <span>AED{totalII}</span>
        </div>
        <hr />
        <div className="flex justify-between">
          <span>Bank/Agency Charges:</span>
          <span>AED{paymentDetails.bankCharges}</span>
        </div>
        <hr className="border-t-2 border-gray-400" />
        <div className="flex justify-between font-bold text-lg">
          <span>Grand Total:</span>
          <span>AED{grandTotal}</span>
        </div>
      </div>
    </div>
  );
};

export default FeeCard;
