
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">SP Physiotherapy & Rehabilitation</h3>
            <p className="text-gray-300 mb-4">Best physiotherapy clinic for muscular pain, joint pain, and ankle pain treatments in Sahjnawa, Gorakhpur.</p>
            <div className="flex items-center mb-3">
              <Phone className="h-5 w-5 mr-3 text-physio-400" />
              <span className="text-gray-300">+91 7607323203</span>
            </div>
            <div className="flex items-center mb-3">
              <Mail className="h-5 w-5 mr-3 text-physio-400" />
              <span className="text-gray-300">pratapatis@gmail.com</span>
            </div>
            <div className="flex items-center mb-3">
              <MapPin className="h-5 w-5 mr-3 text-physio-400" />
              <span className="text-gray-300">Mandi Rd, near hariom cinema, Sahjanwa, Uttar Pradesh 273209</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-physio-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-physio-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-physio-400 transition-colors">Services</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-physio-400 transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-physio-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/book" className="text-gray-300 hover:text-physio-400 transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">Monday - Friday:</span>
              <span className="text-gray-300">9:00 AM - 7:00 PM</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">Saturday:</span>
              <span className="text-gray-300">9:00 AM - 5:00 PM</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-gray-300">Sunday:</span>
              <span className="text-gray-300">Closed</span>
            </div>

            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-physio-600 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-physio-600 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-physio-600 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SP Physiotherapy & Rehabilitation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
