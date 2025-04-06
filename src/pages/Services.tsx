
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Muscular Pain Treatment',
    description: 'Specialized therapy for all types of muscular pain, including chronic conditions and acute injuries.',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    details: 'Our muscular pain treatments combine manual therapy, dry needling, and therapeutic exercises to provide rapid relief and long-term recovery.'
  },
  {
    id: 2,
    title: 'Joint Pain Management',
    description: 'Effective treatment for joint pain in knees, shoulders, hips, and other areas with specialized rehabilitation protocols.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    details: 'We address joint pain through a combination of joint mobilization, targeted exercises, and advanced modalities to restore function and reduce pain.'
  },
  {
    id: 3,
    title: 'Ankle Pain Rehabilitation',
    description: 'Comprehensive treatment for ankle injuries, sprains, and chronic ankle conditions to restore mobility and strength.',
    image: 'https://images.unsplash.com/photo-1570655652364-2e0a67455ac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    details: 'Our ankle rehabilitation program focuses on stability training, proprioception, and progressive strengthening to help you return to full activity.'
  },
  {
    id: 4,
    title: 'Sports Injury Rehabilitation',
    description: 'Specialized treatment for athletes of all levels, focusing on injury recovery and performance enhancement.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    details: 'Our sports injury program is designed to get athletes back to their sport quickly and safely, with protocols tailored to sport-specific demands.'
  },
  {
    id: 5,
    title: 'Post-Surgical Rehabilitation',
    description: 'Supportive care following surgery to restore mobility, strength, and function for optimal recovery.',
    image: 'https://images.unsplash.com/photo-1588543385566-413e8ff13d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    details: 'Working closely with surgeons, our post-surgical rehab ensures proper healing, reduced complications, and faster return to normal activities.'
  },
  {
    id: 6,
    title: 'Neurological Rehabilitation',
    description: 'Specialized programs for patients recovering from stroke, traumatic brain injury, or living with neurological conditions.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    details: 'Our neurological rehabilitation focuses on regaining lost functions, improving mobility, and enhancing independence through specialized techniques.'
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Specialized Services</h1>
              <div className="w-20 h-1 bg-physio-500 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                SP Physiotherapy & Rehabilitation offers a comprehensive range of physiotherapy services
                tailored to your specific needs. Each treatment plan is designed after a thorough
                assessment to address your unique condition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card 
                  key={service.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="text-lg font-semibold mb-2">What to Expect</h4>
                      <p className="text-gray-600 mb-4">{service.details}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Need specialized physiotherapy care?</h2>
                <p className="text-gray-600 mb-6">
                  Contact us today at <span className="font-semibold">+91 7607323203</span> to speak with our physiotherapy
                  experts or to schedule an appointment at our clinic in Sahjnawa, Gorakhpur.
                </p>
                <div className="inline-flex items-center text-physio-600 font-medium hover:text-physio-700 transition-colors">
                  <a href="#contact" className="flex items-center">
                    Book an appointment <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
