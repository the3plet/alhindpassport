import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Service } from '../types';

interface ServicesCarouselProps {
  services: Service[];
}

export default function ServicesCarousel({ services }: ServicesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    setCurrentIndex((current) => (current - 1 + services.length) % services.length);
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
                  <span className="ml-2">${service.fees}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold">Processing Time:</span>
                  <span className="ml-2">{service.processingTime}</span>
                </div>
              </div>
              <button className="mt-8 bg-white text-blue-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Schedule Now
              </button>
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
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}