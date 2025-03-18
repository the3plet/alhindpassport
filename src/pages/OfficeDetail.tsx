import React from "react";
import { Link, useParams } from "react-router";
import api from "../../data.json";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type Props = {};

const OfficeDetail = (props: Props) => {
  const { id } = useParams();
  const office = api.locations.find((loc) => loc.id.toString() === id);
  return (
    <div className="flex justify-between py-20">
      <div className="flex flex-col gap-5 pl-48">
        <div>
          <Link to="/offices" className="flex items-center gap-0.5">
            <ArrowLeft size={15} className="h-5" />
            <p className="pb-0.5 hover:underline cursor-pointer text-sm">
              Back to list
            </p>
          </Link>
          <h1 className="text-4xl font-sans">{office?.name}</h1>
          {/* <p className="text-xl font-normal pt-4">This ePassport centre location has a total of {office?.no_of_counters} counter to visit.</p> */}
          <p className="text-lg font-normal">Opens from {office?.day}</p>
          <ul className="py-4">
            <li><p>Working Hours: {office?.working_hours.details.working_hours}</p></li>
            <li><p>Launch Break: {office?.working_hours.details.lunch_break}</p></li>
            <li><p>Submission Hours: {office?.working_hours.details.submission_hours}</p></li>
            <li><p>Delivery Hours: {office?.working_hours.details.delivery_hours}</p></li>
          </ul>
        </div>
        <div>
          <h1 className="text-4xl font-sans">Address</h1>
          <p className="text-md w-sm pt-4">
            {office?.location_address}
          </p>
        </div>
        <div className="pt-2">
          <h1 className="text-4xl font-sans">Public Transport</h1>
          <p className="text-md w-sm pt-4">{office?.public_transport_availability}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 pr-48">
        <Button className="hover:underline cursor-pointer">
          Book an Appointment
        </Button>
        <p className="flex justify-center">Map Location</p>
        <img className="cursor-pointer"
          src="https://miro.medium.com/v2/resize:fit:1400/1*qYUvh-EtES8dtgKiBRiLsA.png"
          width={450} onClick={()=> window.open(office?.google_location || '#',"_blank") }
        />
       
      </div>
    </div>
  );
};

export default OfficeDetail;
