import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Testimonials = ({ testimonials }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers across Greater Accra have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <CardContent className="p-8">
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-12 w-12 text-blue-600" />
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                  "{testimonial.text}"
                </blockquote>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-green-50 text-green-700 rounded-full">
            <Star className="h-5 w-5 mr-2 fill-current" />
            Join hundreds of satisfied customers across Greater Accra
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;