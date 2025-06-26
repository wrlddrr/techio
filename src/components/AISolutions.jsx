import React from 'react';

const AISolutions = ({ toggleModal }) => {
  const aiServices = [
    {
      title: 'AI Model Development',
      description: 'We design, train, and deploy custom AI models tailored to your specific business needs.',
      features: ['Predictive Analytics', 'Computer Vision', 'Natural Language Processing']
    },
    {
      title: 'Data Labeling Services',
      description: 'High-quality annotated datasets to train your machine learning models.',
      features: ['Image & Video Annotation', 'Text Classification', 'Data Validation']
    }
  ];

  const aiProcess = [
    { step: 1, title: 'Requirement Analysis', description: 'Understanding your business goals and data landscape' },
    { step: 2, title: 'Data Preparation', description: 'Collection, cleaning, and labeling of training data' },
    { step: 3, title: 'Model Training', description: 'Developing and training custom AI models' },
    { step: 4, title: 'Deployment & Integration', description: 'Implementing models into your existing systems' }
  ];

  return (
    <section id="ai" className="py-16 md:py-24 px-4 md:px-8 text-white">
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Raleway']">
            <span className="section-title text-white">AI Solutions</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Harness the power of artificial intelligence to transform your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {aiServices.map((service, index) => (
              <div key={index} className="ai-process-card p-6 rounded-2xl mb-6">
                <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <i className="fas fa-check-circle text-primary mr-2"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our AI Process</h3>
              <div className="space-y-6">
                {aiProcess.map((step) => (
                  <div key={step.step} className="flex">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={toggleModal}
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
          >
            Request AI Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default AISolutions;