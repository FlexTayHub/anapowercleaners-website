import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const Gallery = ({ gallery }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Before & After Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the dramatic transformations we achieve with our professional pressure washing services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {gallery.map((item, index) => (
            <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <h3 className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  
                  <div className="grid grid-cols-2">
                    {/* Before Image */}
                    <div className="relative group cursor-pointer" onClick={() => openModal({ ...item, type: 'before' })}>
                      <img
                        src={item.beforeImage}
                        alt={`${item.title} - Before`}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Before
                        </span>
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="relative group cursor-pointer" onClick={() => openModal({ ...item, type: 'after' })}>
                      <img
                        src={item.afterImage}
                        alt={`${item.title} - After`}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          After
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal for full-size image viewing */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="outline"
                size="sm"
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white"
              >
                ×
              </Button>
              <img
                src={selectedImage.type === 'before' ? selectedImage.beforeImage : selectedImage.afterImage}
                alt={`${selectedImage.title} - ${selectedImage.type}`}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <span className={`px-4 py-2 rounded-full text-white font-medium ${
                  selectedImage.type === 'before' ? 'bg-red-600' : 'bg-green-600'
                }`}>
                  {selectedImage.title} - {selectedImage.type === 'before' ? 'Before' : 'After'}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            Ready to see similar results for your property?{' '}
            <button
              onClick={() => {
                const element = document.getElementById('quote');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-2"
            >
              Get your free quote today
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;