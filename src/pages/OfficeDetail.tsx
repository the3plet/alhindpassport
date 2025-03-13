import React from "react";
import { Link, useParams } from "react-router";
import api from "..//../data.json";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type Props = {};

const OfficeDetail = (props: Props) => {
  const { id } = useParams();
  const office = api.locations.find((loc) => loc.id.toString() === id);
  return (
    <div className="flex justify-between py-36">
      <div className="flex flex-col gap-10 pl-48">
        <div>
          <Link to='/offices' className="flex items-center gap-0.5">
          <ArrowLeft size={15} className="h-5"/>
          <p className="pb-0.5 hover:underline cursor-pointer text-sm">Back to list</p>
          </Link>
          <h1 className="text-4xl font-sans">{office?.name}</h1>
          <p className="text-xl font-normal pt-4">This ePassport centre location has a total of {office?.no_of_counters} counter to visit.</p>
          <p className="text-lg font-normal">Opens from {office?.day}</p>
          <p className="text-lg font-normal">Hours: {office?.opening_hours}</p>
        </div>
        <div>
          <h1 className="text-4xl font-sans">Address</h1>
          <p className="text-lg font-normal pt-4">Location Address will be provided here</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 pr-48">
        <Button className="hover:underline cursor-pointer">Book an Appointment</Button>
        <p className="flex justify-center">Map Location</p>
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*qYUvh-EtES8dtgKiBRiLsA.png" width={450}/>
      </div>
    </div>
  );
};

export default OfficeDetail;
