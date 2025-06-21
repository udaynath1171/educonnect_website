import React from 'react';
import { Clock, UserX, FileText } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Time-Consuming Process",
      description: "Teachers spend 4+ hours weekly on parent communications, taking valuable time away from lesson planning and instruction.",
      color: "red"
    },
    {
      icon: UserX,
      title: "Parent App Fatigue",
      description: "Only 62% of parents download and actively use school apps, leaving a significant communication gap for crucial updates.",
      color: "red"
    },
    {
      icon: FileText,
      title: "Tracking & Documentation",
      description: "Manual tracking of communication attempts is inconsistent, making it difficult to document parent engagement efforts.",
      color: "red"
    }
  ];

  const solutions = [
    {
      title: "Save 3+ Hours Weekly",
      description: "Automate routine communications with pre-built templates"
    },
    {
      title: "98% Parent Reach",
      description: "Connect via channels parents already use and check daily"
    },
    {
      title: "Complete Documentation",
      description: "Automatic logging of all communications for reporting"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Communication Gap Hurting Student Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most parent communication systems create more problems than they solve. EduConnect bridges the gap with tools teachers actually want to use.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="card p-8">
              <div className={`w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6`}>
                <problem.icon className={`text-red-600`} size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Solution Section */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              The EduConnect Solution
            </h3>
            <p className="text-xl mb-8">
              EduConnect automatically delivers attendance, assignment, and announcement alerts directly to parents via WhatsApp and SMS—the channels they already use daily.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-blue-700/50 p-5 rounded-lg">
                  <p className="font-semibold mb-2">
                    {solution.title}
                  </p>
                  <p className="text-blue-100 text-sm">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection; 