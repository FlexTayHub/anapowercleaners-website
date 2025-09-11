import React from 'react';
import { Home, Building, MapPin, Car, Shield } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const iconMap = {
  Home,
  Building,
  MapPin,
  Car,
  Shield
};

const Services = ({ services }) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive pressure washing solutions for every need in Greater Accra. 
            From residential homes to large commercial compounds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const isSpecialty = service.title === "Compound Cleaning";
            
            return (
              <Card 
                key={service.id} 
                className={`group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-2xl overflow-hidden ${
                  isSpecialty ? 'ring-2 ring-blue-600 ring-opacity-50' : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${
                      isSpecialty ? 'bg-blue-600' : 'bg-white/90'
                    } shadow-lg`}>
                      <IconComponent className={`h-6 w-6 ${
                        isSpecialty ? 'text-white' : 'text-blue-600'
                      }`} />
                    </div>
                  </div>
                  {isSpecialty && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Our Specialty
                      </span>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 text-blue-700 rounded-full">
            <Shield className="h-5 w-5 mr-2" />
            All services include eco-friendly cleaning solutions and professional equipment
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;