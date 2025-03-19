import React from "react";

const FeeCard = () => {
  // Payment details
  const paymentDetails = {
    consularFee: 10, // (a) Consular fee
    consularSurcharge: 2, // (b) Consular surcharge
    serviceFee: 3, // (c) Service Fee
    taxes: 0.5, // (d) Taxes
    bankCharges: 1, // (e) Bank/Agency charges
  };

  // Calculate totals
  const totalI = paymentDetails.consularFee + paymentDetails.consularSurcharge;
  const totalII = paymentDetails.serviceFee + paymentDetails.taxes;
  const grandTotal = totalI + totalII + paymentDetails.bankCharges;

  return (
    <div className=" bg-white  rounded-lg p-6 pt-1 border-gray-200">
      <h2 className="text-2xl rounded-sm rounded-b-none font-bold text-white bg-gray-600 py-4 mb-4 text-center">
        Fees
      </h2>
      <div className="space-y-2 px-4">
        <div className="flex justify-between">
          <span>Consular Fee:</span>
          <span>KWD{paymentDetails.consularFee}</span>
        </div>
        <div className="flex justify-between">
          <span>Consular Surcharge:</span>
          <span>KWD{paymentDetails.consularSurcharge}</span>
        </div>
        <hr />
        <div className="flex justify-between font-semibold">
          <span>Total (I):</span>
          <span>KWD{totalI}</span>
        </div>
        <hr />
        <div className="flex justify-between">
          <span>Service Fee:</span>
          <span>KWD{paymentDetails.serviceFee}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes:</span>
          <span>KWD{paymentDetails.taxes}</span>
        </div>
        <hr />
        <div className="flex justify-between font-semibold">
          <span>Total (II):</span>
          <span>KWD{totalII}</span>
        </div>
        <hr />
        <div className="flex justify-between">
          <span>Bank/Agency Charges:</span>
          <span>KWD{paymentDetails.bankCharges}</span>
        </div>
        <hr className="border-t-2 border-gray-400" />
        <div className="flex justify-between font-bold text-lg">
          <span>Grand Total:</span>
          <span>KWD{grandTotal}</span>
        </div>
      </div>
    </div>
  );
};

export default FeeCard;
