import React from 'react';
import { Bell, Calendar, Megaphone } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Bell,
      title: "Attendance Alerts",
      description: "Automatically notify parents when students are marked absent or tardy. Reduce unexcused absences and increase accountability.",
      color: "blue",
      benefits: [
        "Real-time absence notifications",
        "Parent reply tracking",
        "Attendance pattern insights"
      ]
    },
    {
      icon: Calendar,
      title: "Assignment Notifications",
      description: "Send reminders about upcoming assignments and project due dates. Help students stay on track and parents stay informed.",
      color: "orange",
      benefits: [
        "Automated due date reminders",
        "Custom reminder schedules",
        "Missing assignment alerts"
      ]
    },
    {
      icon: Megaphone,
      title: "Class Announcements",
      description: "Share important updates about events, schedule changes, and other class announcements with all parents simultaneously.",
      color: "teal",
      benefits: [
        "One-click class communication",
        "Scheduled future announcements",
        "Template library for quick sending"
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        hover: "group-hover:bg-blue-200",
        accent: "bg-blue-600",
        accentHover: "group-hover:bg-blue-500",
        dot: "bg-blue-600"
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-500",
        hover: "group-hover:bg-orange-200",
        accent: "bg-orange-500",
        accentHover: "group-hover:bg-orange-400",
        dot: "bg-orange-500"
      },
      teal: {
        bg: "bg-teal-100",
        text: "text-teal-500",
        hover: "group-hover:bg-teal-200",
        accent: "bg-teal-500",
        accentHover: "group-hover:bg-teal-400",
        dot: "bg-teal-500"
      }
    };
    return colorMap[color];
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Features That Make a Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EduConnect is designed with teachers in mind, focusing on what matters most: simple tools that save time and improve parent engagement.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            
            return (
              <div key={index} className="card group">
                {/* Accent Bar */}
                <div className={`h-2 ${colors.accent} ${colors.accentHover} transition-colors duration-300`}></div>
                
                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mb-6 ${colors.hover} transition-colors duration-300`}>
                    <feature.icon className={colors.text} size={32} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {feature.description}
                  </p>
                  
                  {/* Benefits List */}
                  <ul className="space-y-2 text-gray-700">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <span className={`w-2 h-2 ${colors.dot} rounded-full mr-2`}></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 