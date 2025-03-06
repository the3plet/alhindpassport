import React from 'react'
import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import ServicesCarousel from "../components/ServicesCarousel";
import { Service } from "../types";
import {
  AlertTriangle,
  FileText,
  HelpCircle,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import { Link } from 'react-router';

const services: Service[] = [
  {
    id: "1",
    name: "Passport Renewal",
    description:
      "Renew your expired or soon-to-expire passport with our efficient service.",
    fees: 145,
    processingTime: "7-10 business days",
  },
  {
    id: "2",
    name: "Visa Application",
    description:
      "Apply for various types of visas including tourist, business, and student visas.",
    fees: 160,
    processingTime: "10-15 business days",
  },
  {
    id: "3",
    name: "OCI Card",
    description:
      "Apply for Overseas Citizen of India (OCI) card or get your existing card renewed.",
    fees: 275,
    processingTime: "15-20 business days",
  },
  {
    id: "4",
    name: "Miscellaneous Consular Services",
    description:
      "Obtain a Police Clearance Certificate (PCC) for visa or immigration purposes.",
    fees: 75,
    processingTime: "5-7 business days",
  },
  {
    id: "5",
    name: "Attestation",
    description: "Get your documents attested for use in foreign countries.",
    fees: 50,
    processingTime: "3-5 business days",
  },
];

const Home = (
    
) => {
  return (
   <div className="min-h-screen bg-gray-50">
         <div className="bg-blue-900 text-white py-2">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex justify-between items-center text-sm">
               <div className="flex space-x-4">
                 <a href="#" className="hover:text-blue-200">
                   Skip to main content
                 </a>
                 <a href="#" className="hover:text-blue-200">
                   Screen Reader Access
                 </a>
               </div>
               <div className="flex space-x-4">
                 <select className="bg-blue-800 text-white px-2 py-1 rounded">
                   <option>English</option>
                   <option>हिंदी</option>
                 </select>
                 <button className="hover:text-blue-200">A+</button>
                 <button className="hover:text-blue-200">A-</button>
               </div>
             </div>
           </div>
         </div>
   
        
   
         {/* Hero Section with Carousel */}
         <ServicesCarousel services={services} />
   
         {/* Important Notices */}
         <section className="bg-red-50 border-t-4 border-red-500 py-4">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex items-center gap-2 text-red-700 mb-2">
               <AlertTriangle size={24} />
               <h2 className="text-xl font-bold">Important Notices</h2>
             </div>
             <ul className="list-disc list-inside space-y-2 text-red-700">
               <li>Beware of fake websites and fraudulent offers</li>
               <li>Never share your login credentials or OTP with anyone</li>
               <li>Report suspicious activities to our helpdesk</li>
             </ul>
           </div>
         </section>
   
         {/* Services Section */}
         <section id="services" className="py-16">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {services.map((service) => (
                 <ServiceCard key={service.id} service={service} />
               ))}
             </div>
           </div>
         </section>
   
         {/* Quick Links */}
         <section className="bg-gray-100 py-16">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-3xl font-bold text-center mb-12">Quick Links</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                 <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                 <h3 className="font-semibold mb-2">Consular Offices</h3>
                 <p className="text-gray-600">Find nearest consular office</p>
               </div>
               <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                 <FileText className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                 <h3 className="font-semibold mb-2">Track Application</h3>
                 <p className="text-gray-600">Check your application status</p>
               </div>
               <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                 <Users className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                 <h3 className="font-semibold mb-2">Appointment</h3>
                 <p className="text-gray-600">
                   Schedule or reschedule appointment
                 </p>
               </div>
                 <a href='faq'>
               <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                 <HelpCircle className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                 <h3 className="font-semibold mb-2">FAQs</h3>
                 <p className="text-gray-600">Find answers to common questions</p>
               </div>
                 </a>
             </div>
           </div>
         </section>
   
         {/* Document Checklist & Information */}
         <section className="py-16">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-white p-8 rounded-lg shadow">
                 <h3 className="text-2xl font-bold mb-6">Document Checklist</h3>
                 <ul className="space-y-4">
                   <li className="flex items-start gap-3">
                     <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                       <span className="text-green-600">✓</span>
                     </div>
                     <div>
                       <h4 className="font-semibold">Proof of Identity</h4>
                       <p className="text-gray-600">
                         Aadhar Card, PAN Card, or Voter ID
                       </p>
                     </div>
                   </li>
                   <li className="flex items-start gap-3">
                     <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                       <span className="text-green-600">✓</span>
                     </div>
                     <div>
                       <h4 className="font-semibold">Proof of Address</h4>
                       <p className="text-gray-600">
                         Utility Bills, Bank Statement, or Rental Agreement
                       </p>
                     </div>
                   </li>
                   <li className="flex items-start gap-3">
                     <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                       <span className="text-green-600">✓</span>
                     </div>
                     <div>
                       <h4 className="font-semibold">Photographs</h4>
                       <p className="text-gray-600">
                         Recent passport size photographs (35mm x 45mm)
                       </p>
                     </div>
                   </li>
                 </ul>
               </div>
               <div className="bg-white p-8 rounded-lg shadow">
                 <h3 className="text-2xl font-bold mb-6">Contact Support</h3>
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                     <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                     <div>
                       <h4 className="font-semibold">24x7 Helpline</h4>
                       <p className="text-gray-600">1800-258-1800</p>
                       <p className="text-gray-600">+91-44-2346-1800</p>
                     </div>
                   </div>
                   <div>
                     <h4 className="font-semibold mb-2">Support Hours</h4>
                     <p className="text-gray-600">
                       Monday to Friday: 9:00 AM - 5:30 PM
                     </p>
                     <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                     <p className="text-gray-600">
                       Closed on Sundays and Public Holidays
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
   
      
         
       </div>
  )
}

export default Home