// Mock data for ANA Power Cleaners
export const mockData = {
  business: {
    name: "ANA Power Cleaners",
    phone: "+233(0) 544539852",
    email: "info@anapowercleaners.com",
    website: "anapowercleaners.com",
    hours: "24 hours a day",
    location: "Greater Accra, Ghana"
  },
  
  services: [
    {
      id: 1,
      title: "Residential Cleaning",
      description: "Professional pressure washing for homes, patios, and outdoor spaces",
      icon: "Home",
      image: "https://images.unsplash.com/photo-1718152470408-cfeebeb6b9fc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxwcmVzc3VyZSUyMHdhc2hpbmd8ZW58MHx8fHwxNzU3NTk1Nzg1fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 2,
      title: "Commercial Cleaning",
      description: "Large-scale pressure washing for businesses and commercial properties",
      icon: "Building",
      image: "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxjb21tZXJjaWFsJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzU3NTk1NzkwfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 3,
      title: "Driveway & Walkway",
      description: "Deep cleaning for driveways, walkways, and paved surfaces",
      icon: "Road",
      image: "https://images.unsplash.com/photo-1718152521364-b9655b8a7926?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHw0fHxwcmVzc3VyZSUyMHdhc2hpbmd8ZW58MHx8fHwxNzU3NTk1Nzg1fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 4,
      title: "Vehicle & Fleet Cleaning",
      description: "Professional washing for cars, trucks, and commercial vehicle fleets",
      icon: "Car",
      image: "https://images.unsplash.com/photo-1581883579507-019c44b711cb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxwcmVzc3VyZSUyMHdhc2hpbmd8ZW58MHx8fHwxNzU3NTk1Nzg1fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 5,
      title: "Compound Cleaning",
      description: "Our specialty - comprehensive cleaning for residential and commercial compounds",
      icon: "Shield",
      image: "https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxjb21tZXJjaWFsJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzU3NTk1NzkwfDA&ixlib=rb-4.1.0&q=85"
    }
  ],

  gallery: [
    {
      id: 1,
      title: "Commercial Building",
      beforeImage: "https://images.unsplash.com/photo-1437326300822-01d8f13c024f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxjb21tZXJjaWFsJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzU3NTk1NzkwfDA&ixlib=rb-4.1.0&q=85",
      afterImage: "https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg"
    },
    {
      id: 2,
      title: "Residential Compound",
      beforeImage: "https://images.pexels.com/photos/6196688/pexels-photo-6196688.jpeg",
      afterImage: "https://images.unsplash.com/photo-1718152470408-cfeebeb6b9fc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxwcmVzc3VyZSUyMHdhc2hpbmd8ZW58MHx8fHwxNzU3NTk1Nzg1fDA&ixlib=rb-4.1.0&q=85"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Kwame Asante",
      location: "East Legon",
      rating: 5,
      text: "ANA Power Cleaners transformed our compound! Professional service and excellent results."
    },
    {
      id: 2,
      name: "Abena Osei",
      location: "Accra Central", 
      rating: 5,
      text: "Available 24/7 and always deliver quality work. Highly recommend for any cleaning needs."
    },
    {
      id: 3,
      name: "David Mensah",
      location: "Tema",
      rating: 5,
      text: "They cleaned our entire commercial complex. Exceptional attention to detail!"
    }
  ],

  quoteRequests: []
};

// Mock function to simulate quote request submission
export const submitQuoteRequest = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockData.quoteRequests.push({
        id: Date.now(),
        ...formData,
        submittedAt: new Date().toISOString(),
        status: 'pending'
      });
      resolve({ success: true, message: "Quote request submitted successfully!" });
    }, 1000);
  });
};