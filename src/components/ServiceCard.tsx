import React from 'react';
import { Calendar, CalendarCheck, Clock, DollarSign, Newspaper } from 'lucide-react';
import { Service } from '../types';
import RegistrationDialog from './RegistrationDialog';
import { Button } from './ui/button';
import { useNavigate } from 'react-router';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const navigate = useNavigate()
  let serviceList={}
  switch (service.id) {
    case '1':
      serviceList = "passport";
      break;
    case '2':
      serviceList = "visa";
      break;
    default:
      serviceList = "other"; 
  }


  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow" >
      <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="space-y-2">
        <div className="flex items-center text-gray-700">
          <Newspaper size={18} className="mr-2" />
          <span>Fees: SAR  {service.fees}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <Clock size={18} className="mr-2" />
          <span>Processing Time: {service.processingTime}</span>
        </div>
        {/* <RegistrationDialog /> */}
        <Button className='w-full bg-blue-600 hover:bg-blue-500 cursor-pointer' onClick={()=>navigate(`/service/${serviceList}`)}>Start Now</Button>
      </div>
    </div>
  );
}