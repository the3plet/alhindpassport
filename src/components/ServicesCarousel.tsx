import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Service } from "../types";
import RegistrationDialog from "./RegistrationDialog";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";

interface ServicesCarouselProps {
  services: Service[];
}

export default function ServicesCarousel({ services }: ServicesCarouselProps) {
  
  

  const handleClick = (id:string) => {
    let serviceList = {};
  switch (id) {
    case "1":
      serviceList = "passport";
      break;
    case "2":
      serviceList = "visa";
      break;
    default:
      serviceList = "";
  }
    navigate(`/service/${serviceList}`);
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % services.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (current) => (current - 1 + services.length) % services.length
    );
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700">
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {services.map((service, index) => (
          <div
            key={service.id}
            className="min-w-full h-full flex items-center justify-center px-4"
          >
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold mb-4">{service.name}</h2>
              <p className="text-xl mb-6">{service.description}</p>
              <div className="flex items-center justify-center gap-8 text-lg">
                <div className="flex items-center">
                  <span className="font-semibold">Fees:</span>
                  <span className="ml-2">SAR  {service.fees}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold">Processing Time:</span>
                  <span className="ml-2">{service.processingTime}</span>
                </div>
              </div>
              <Button
                className="mt-8 text-white bg-blue-600 w-44  rounded-md font-semibold hover:bg-blue-500 cursor-pointer"
                onClick={() => {
                  
                  handleClick(service.id);
                }}
              >
                Start Now <ArrowRight className="mt-1" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-colors"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-colors"
      >
        <ChevronRight size={24} className="text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
