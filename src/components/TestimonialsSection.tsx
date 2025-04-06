
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rohit Sharma',
    occupation: 'Professional Cricketer',
    content: 'After my sports injury, I was worried about returning to cricket.  Dr. Shraddhanand rehabilitation program got me back on the field faster than expected. His expertise in sports injuries is unmatched.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    name: 'Priya Patel',
    occupation: 'Office Manager',
    content: 'I suffered from chronic back pain for years due to long hours at a desk. The personalized treatment plan and ergonomic advice from SP Physiotherapy has made a tremendous difference in my daily comfort.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 3,
    name: 'Amit Kumar',
    occupation: 'Retired Teacher',
    content: 'At 65, I was struggling with joint pain that limited my mobility. The team at SP Physiotherapy created a gentle yet effective treatment plan that has significantly improved my quality of life.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">What Our Patients Say</h2>
          <div className="w-20 h-1 bg-physio-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Read what our patients have to say about their experience and recovery journey with SP Physiotherapy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.occupation}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
