import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      description: 'Custom websites built with modern technologies that are fast, responsive, and SEO-friendly.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Enterprise Applications']
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['iOS & Android Apps', 'Progressive Web Apps', 'API Integration']
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that enhance user engagement and satisfaction.',
      features: ['Wireframing & Prototyping', 'User Research', 'Interaction Design']
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-8 bg-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Raleway']">
            <span className="section-title">Our Services</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white rounded-2xl p-8 shadow-md card-hover">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <i className={`${service.icon} service-icon text-3xl text-primary`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-2"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;