
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Sports Injury Rehabilitation',
    description: 'Specialized treatment for athletes of all levels, focusing on injury recovery and performance enhancement.',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    title: 'Musculoskeletal Therapy',
    description: 'Effective treatment for joint pain, muscle strains, and other musculoskeletal conditions.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    title: 'Neurological Rehabilitation',
    description: 'Specialized programs for patients recovering from stroke, traumatic brain injury, or living with neurological conditions.',
    image: 'https://images.unsplash.com/photo-1570655652364-2e0a67455ac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    title: 'Post-Surgical Rehabilitation',
    description: 'Supportive care following surgery to restore mobility, strength, and function for optimal recovery.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Specialized Services</h2>
          <div className="w-20 h-1 bg-physio-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive range of physiotherapy services tailored to your specific needs.
            Each treatment plan is designed after a thorough assessment to address your unique condition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
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
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={`/services/${service.id}`} 
                  className="inline-flex items-center text-physio-600 font-medium hover:text-physio-700 transition-colors"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-physio-600 hover:bg-physio-700 text-white">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
