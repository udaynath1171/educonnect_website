import React from 'react';
import { Bell, ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
      <div className="container-custom py-16 md:py-24 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* Early Access Badge */}
            <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 border border-blue-200 mb-4">
              <span className="animate-pulse mr-2">●</span>
              Now in Early Access
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Keep Parents in the Loop—Without the Extra Work
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              EduConnect uses WhatsApp (and SMS fallback) so teachers send Attendance, Assignment & Announcement alerts in seconds—no parent app needed.
            </p>
            
            {/* CTA Button */}
            <div className="pt-4">
              <button className="btn-primary flex items-center group">
                Get Early Access
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              <p className="text-sm text-gray-500 mt-3">
                Limited spots available for 2025 school year
              </p>
            </div>
          </div>
          
          {/* Right Content - Demo Card */}
          <div className="flex-1 relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Header */}
              <div className="bg-blue-600 text-white p-4">
                <div className="flex items-center">
                  <MessageCircle size={24} />
                  <span className="ml-2 font-medium">EduConnect</span>
                </div>
              </div>
              
              {/* Messages */}
              <div className="p-6 space-y-6">
                {/* Attendance Alert */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Bell size={20} className="text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Attendance Alert</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Emma was marked absent today in Math class. Please reply if this was planned.
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        Sent via WhatsApp • 9:15 AM
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Assignment Due */}
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Bell size={20} className="text-orange-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Assignment Due</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Science project on Ecosystems due this Friday. Details sent in email.
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        Sent via WhatsApp • Yesterday
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Class Announcement */}
                <div className="bg-teal-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Bell size={20} className="text-teal-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Class Announcement</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Field trip forms due by Monday. Please return signed permission slip.
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        Sent via WhatsApp • 2 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-200 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-teal-200 rounded-full opacity-50 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 