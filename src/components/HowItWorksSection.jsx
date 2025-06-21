import React from 'react';
import { Link, Settings, MessageCircle } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Link,
      title: "Connect",
      description: "Link your student information system (SIS) with EduConnect. Works with PowerSchool, Infinite Campus, and more.",
      number: "1"
    },
    {
      icon: Settings,
      title: "Configure",
      description: "Set up your communication preferences and choose which alerts to automate. Customize templates to match your voice.",
      number: "2"
    },
    {
      icon: MessageCircle,
      title: "Communicate",
      description: "Let EduConnect handle routine communications automatically while you focus on teaching. Send manual messages anytime.",
      number: "3"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How EduConnect Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with our simple three-step process
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="text-white" size={32} />
                </div>
                
                {/* Content Card */}
                <div className="bg-white p-6 rounded-xl shadow-md w-full">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                
                {/* Step Number */}
                <div className="mt-4 inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-semibold">
                  {step.number}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            EduConnect adapts to your existing workflows. No need to learn complex new systems or change how you teach.
          </p>
          <button className="btn-primary">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 