import React from 'react';
import { Calendar, CalendarCheck, Clock, DollarSign } from 'lucide-react';
import { Service } from '../types';
import RegistrationDialog from './RegistrationDialog';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="space-y-2">
        <div className="flex items-center text-gray-700">
          <DollarSign size={18} className="mr-2" />
          <span>Fees: ${service.fees}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <Clock size={18} className="mr-2" />
          <span>Processing Time: {service.processingTime}</span>
        </div>
        <RegistrationDialog />
      </div>
    </div>
  );
}