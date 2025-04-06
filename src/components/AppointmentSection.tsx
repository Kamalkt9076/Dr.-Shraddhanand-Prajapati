
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Phone } from 'lucide-react';
import { toast } from "sonner";
import { AppointmentFormData, validateAppointmentForm, submitAppointmentForm } from '@/utils/formUtils';

const AppointmentSection = () => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateAppointmentForm(formData)) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const success = await submitAppointmentForm(formData);
      
      if (success) {
        toast.success("Appointment request submitted successfully! We'll contact you shortly.");
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        toast.error("There was a problem submitting your request. Please try again later.");
      }
    } catch (error) {
      toast.error("There was a problem submitting your request. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-physio-600 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-physio-500/30 clip-path-slant"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-physio-700/30 rounded-tr-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Book Your Appointment Today</h2>
            <p className="text-physio-100 mb-8">
              Take the first step toward recovery and improved well-being. 
              Schedule a consultation with Dr. Shraddhanand Prajapati and discover how our 
              personalized physiotherapy treatments can help you achieve your health goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Flexible Scheduling</h3>
                  <p className="text-physio-100">
                    We offer convenient appointment times to accommodate your busy schedule, 
                    including early morning and evening slots.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Prompt Attention</h3>
                  <p className="text-physio-100">
                    We value your time. New patients are typically seen within 24-48 hours of contacting us.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Easy Booking Process</h3>
                  <p className="text-physio-100">
                    Book online, via phone, or through our mobile app — whatever is most convenient for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Request an Appointment</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physio-500"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physio-500"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physio-500"
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physio-500"
                  placeholder="Your phone number"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service*</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physio-500"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="sports-injury">Sports Injury Rehabilitation</option>
                  <option value="musculoskeletal">Musculoskeletal Therapy</option>
                  <option value="neurological">Neurological Rehabilitation</option>
                  <option value="post-surgical">Post-Surgical Rehabilitation</option>
                  <option value="consultation">Initial Consultation</option>
                  <option value="consultation">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physio-500"
                  placeholder="Tell us about your condition or any questions you have"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-physio-600 hover:bg-physio-700 text-white py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Request Appointment'}
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and consent to be contacted regarding your request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
