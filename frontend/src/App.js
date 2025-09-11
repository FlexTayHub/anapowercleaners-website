import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";

// Import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import QuoteForm from "./components/QuoteForm";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

// Import mock data
import { mockData } from "./mock";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header business={mockData.business} />
      <Hero business={mockData.business} />
      <Services services={mockData.services} />
      <Gallery gallery={mockData.gallery} />
      <QuoteForm />
      <Testimonials testimonials={mockData.testimonials} />
      <Footer business={mockData.business} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;