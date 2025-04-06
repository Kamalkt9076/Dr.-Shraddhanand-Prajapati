
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="text-center md:text-left">
            <span className="inline-block px-4 py-2 bg-physio-100 text-physio-600 font-medium rounded-full mb-6">
              Expert Physiotherapy Care
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Path to <br />
              <span className="text-physio-600">Recovery & Wellness</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Specialized physiotherapy treatments designed to help you move better, 
              recover faster, and improve your quality of life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-physio-600 hover:bg-physio-700 text-white px-6 py-3 h-auto text-lg">
                Book an Appointment
              </Button>
              <Button variant="outline" className="border-physio-600 text-physio-600 hover:bg-physio-50 px-6 py-3 h-auto text-lg">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-4 rounded-lg shadow-xl animate-float">
              <img 
                src="/lovable-uploads/9156632e-9122-4bac-b2b1-e5694a67b8c6.png" 
                alt="Dr. Shraddhanand Prajapati - Expert Physiotherapist" 
                className="w-full h-auto rounded" 
              />
              <div className="bg-white/90 backdrop-blur-sm absolute bottom-8 left-0 right-0 mx-4 p-4 rounded shadow-lg">
                <h3 className="font-bold text-gray-900">Dr. Shraddhanand Prajapati</h3>
                <p className="text-physio-600">Senior Physiotherapist</p>
              </div>
            </div>
            <div className="absolute -z-10 top-1/4 -right-12 w-64 h-64 bg-physio-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-1/4 -left-12 w-64 h-64 bg-physio-300/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
