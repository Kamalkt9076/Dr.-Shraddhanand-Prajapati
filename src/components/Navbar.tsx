
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-physio-600 font-bold text-2xl">PhysioHealth</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-physio-600 transition-colors">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-physio-600 transition-colors">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-physio-600 transition-colors">Services</Link>
          <Link to="/testimonials" className="text-gray-700 hover:text-physio-600 transition-colors">Testimonials</Link>
          <Link to="/contact" className="text-gray-700 hover:text-physio-600 transition-colors">Contact</Link>
          <Button className="bg-physio-600 hover:bg-physio-700 text-white">Book Now</Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-md">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-gray-700 hover:text-physio-600 py-2 transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-physio-600 py-2 transition-colors" onClick={toggleMenu}>About</Link>
            <Link to="/services" className="text-gray-700 hover:text-physio-600 py-2 transition-colors" onClick={toggleMenu}>Services</Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-physio-600 py-2 transition-colors" onClick={toggleMenu}>Testimonials</Link>
            <Link to="/contact" className="text-gray-700 hover:text-physio-600 py-2 transition-colors" onClick={toggleMenu}>Contact</Link>
            <Button className="bg-physio-600 hover:bg-physio-700 text-white w-full">Book Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
