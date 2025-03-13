import OfficeTable from "@/components/OfficeTable";
import React from "react";

type Props = {};

const Offices = (props: Props) => {
  return (
    <div className="px-48 py-24 gap-4 flex flex-col">
      <p className="text-4xl font-sans">Location of ICAC</p>
      <OfficeTable />
    </div>
  );
};

export default Offices;
