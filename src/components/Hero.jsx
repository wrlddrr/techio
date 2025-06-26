import React from 'react';

const Hero = ({ toggleModal }) => {
  return (
    <section id="home" className="hero-bg pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Raleway'] leading-tight">
            <span className="text-primary">AI-Powered</span> Digital Solutions<br/>That Drive Business Growth
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            We create intelligent web and mobile applications powered by custom AI models. 
            From data labeling to deployment, we provide end-to-end solutions that help 
            businesses thrive in the digital era.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={toggleModal}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-center hover:bg-secondary transition shadow-lg hover:shadow-xl"
            >
              Book a Demo
            </button>
            <a href="#services" className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold text-center hover:bg-primary hover:text-white transition">
              Explore Services
            </a>
          </div>
          <div className="mt-8 flex items-center">
            <div className="flex -space-x-2">
              {[12, 32, 44, 22].map(id => (
                <img 
                  key={id}
                  src={`https://randomuser.me/api/portraits/${id % 2 === 0 ? 'women' : 'men'}/${id}.jpg`} 
                  className="w-10 h-10 rounded-full border-2 border-white"
                  alt="User"
                />
              ))}
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600"><span className="font-semibold">250+</span> businesses transformed</p>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-primary rounded-2xl flex items-center justify-center animate-float">
              <div className="w-56 h-56 md:w-72 md:h-72 bg-secondary rounded-2xl flex items-center justify-center">
                <div className="w-48 h-48 md:w-60 md:h-60 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="text-center">
                    <i className="fas fa-brain text-5xl text-primary mb-4"></i>
                    <span className="text-xl font-bold text-dark font-['Raleway']">AI SOLUTIONS</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 -left-10 bg-white p-4 rounded-xl shadow-lg animate-pulse-slow">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <i className="fas fa-robot text-white"></i>
                </div>
                <span className="ml-2 font-semibold">AI Integration</span>
              </div>
            </div>
            
            <div className="absolute bottom-0 -right-10 bg-white p-4 rounded-xl shadow-lg animate-pulse-slow">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <i className="fas fa-database text-white"></i>
                </div>
                <span className="ml-2 font-semibold">Data Labeling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;