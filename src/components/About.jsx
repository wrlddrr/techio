import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Raleway']">
            <span className="section-title">About Nexus Digital</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We're a team of innovators, engineers, and AI specialists committed to transforming businesses through cutting-edge technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Driving Digital Transformation Since 2015</h3>
            <p className="text-gray-700 mb-6">
              Founded in 2015, Nexus Digital has evolved from a web development agency to a full-service digital transformation partner. 
              Our journey has been marked by continuous innovation and a commitment to excellence.
            </p>
            <p className="text-gray-700 mb-6">
              Today, we specialize in creating intelligent solutions that leverage artificial intelligence, machine learning, 
              and advanced analytics to solve complex business challenges.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-light p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                <p className="text-gray-600">Empower businesses through intelligent, scalable digital solutions</p>
              </div>
              <div className="bg-light p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-2">Our Vision</h4>
                <p className="text-gray-600">Become the leading AI-driven digital transformation partner globally</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-building text-5xl text-gray-400 mb-4"></i>
                <p className="text-gray-500">Office Environment</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-lg">
              <p className="text-3xl font-bold">8+</p>
              <p className="font-semibold">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;