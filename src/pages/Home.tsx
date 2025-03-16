import React from "react";
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
import { Link } from "react-router";
import { toast } from "sonner";

const services: Service[] = [
  {
    id: "1",
    name: "Passport Service",
    description:
      "Renew your expired or soon-to-expire passport with our efficient service.",
    fees: 145,
    processingTime: "7-10 business days",
  },
  {
    id: "2",
    name: "Visa Service",
    description:
      "Apply for various types of visas including tourist, business, and student visas.",
    fees: 160,
    processingTime: "10-15 business days",
  },
  {
    id: "3",
    name: "OCI Card Service",
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
    name: "Attestation Service",
    description: "Get your documents attested for use in foreign countries.",
    fees: 50,
    processingTime: "3-5 business days",
  },
];

const Home = () => {
  const authStatus = localStorage.getItem("verified");
  console.log(authStatus)
  const handleClick = () => {
    !authStatus && toast.error("Access Denied, Login to Continue");
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Carousel */}
      <ServicesCarousel services={services} />

      {/* Important Notices */}
      <section className="bg-red-50 border-t-4 border-red-500 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-red-700 mb-2">
            <AlertTriangle size={24} />
            <h2 className="text-xl font-bold">
              This website is only for demostration purposes
            </h2>
          </div>
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
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer"
            
          >
            <Link to="/offices">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">ICAC Offices</h3>
                <p className="text-gray-600">
                  Find your nearest ICAC office for appointment.
                </p>
              </div>
            </Link>
            <Link to={authStatus ? "/dashboard/track" : "#"} onClick={handleClick}>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <FileText className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Track Application</h3>
                <p className="text-gray-600">
                  Check your current application status
                </p>
              </div>
            </Link>
            <Link to={authStatus ? "/dashboard" : "#"} onClick={handleClick}>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <Users className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Appointment</h3>
                <p className="text-gray-600">
                  Schedule or reschedule appointment
                </p>
              </div>
            </Link>
            <Link to="faq">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <HelpCircle className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">FAQs</h3>
                <p className="text-gray-600">
                  Find answers to common questions
                </p>
              </div>
            </Link>
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
                    <p className="text-gray-600">1800-258-1800</p>
                    <p className="text-gray-600">+91-44-2346-1800</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Support Hours</h4>
                  <p className="text-gray-600">
                  Monday to Saturday 08:00 - 13:00, 14:00 - 19:00
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
