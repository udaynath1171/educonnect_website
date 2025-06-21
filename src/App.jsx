import React from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import EarlyAccessForm from './components/EarlyAccessForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <EarlyAccessForm />
    </div>
  );
}

export default App; 