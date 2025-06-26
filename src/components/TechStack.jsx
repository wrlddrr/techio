import React from 'react';

const TechStack = () => {
  const technologies = [
    { icon: 'fab fa-react', name: 'React', color: 'text-blue-500' },
    { icon: 'fab fa-node-js', name: 'Node.js', color: 'text-green-600' },
    { icon: 'fab fa-python', name: 'Python', color: 'text-yellow-500' },
    { icon: 'fas fa-brain', name: 'TensorFlow', color: 'text-purple-500' },
    { icon: 'fas fa-cloud', name: 'AWS', color: 'text-blue-400' },
    { icon: 'fab fa-google', name: 'Google Cloud', color: 'text-red-500' }
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Raleway']">
            <span className="section-title">Our Technology Stack</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Cutting-edge technologies powering our AI-driven solutions
          </p>
        </div>
        
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <i className={`${tech.icon} text-4xl ${tech.color} mb-3`}></i>
              <h4 className="font-bold">{tech.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;