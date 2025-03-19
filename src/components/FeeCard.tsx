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
          <span>SAR {paymentDetails.consularFee}</span>
        </div>
        <div className="flex justify-between">
          <span>Consular Surcharge:</span>
          <span>SAR {paymentDetails.consularSurcharge}</span>
        </div>
        <hr />
        <div className="flex justify-between font-semibold">
          <span>Total (I):</span>
          <span>SAR {totalI}</span>
        </div>
        <hr />
        <div className="flex justify-between">
          <span>Service Fee:</span>
          <span>SAR {paymentDetails.serviceFee}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes:</span>
          <span>SAR {paymentDetails.taxes}</span>
        </div>
        <hr />
        <div className="flex justify-between font-semibold">
          <span>Total (II):</span>
          <span>SAR {totalII}</span>
        </div>
        <hr />
        <div className="flex justify-between">
          <span>Bank/Agency Charges:</span>
          <span>SAR {paymentDetails.bankCharges}</span>
        </div>
        <hr className="border-t-2 border-gray-400" />
        <div className="flex justify-between font-bold text-lg">
          <span>Grand Total:</span>
          <span>SAR {grandTotal}</span>
        </div>
      </div>
    </div>
  );
};

export default FeeCard;
