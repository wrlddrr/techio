import React from 'react';

const DemoBooking = () => {
  const services = [
    'Web Development',
    'App Development',
    'AI Solutions',
    'UI/UX Design',
    'All Services'
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 demo-section">
      <div className="container mx-auto max-w-4xl">
        <div className="rounded-2xl p-8 md:p-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Ready to Transform Your Business?</h2>
              <p className="text-gray-700 mb-6">Book a personalized demo with our experts to see how our solutions can work for you.</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span className="text-gray-700">See real-world use cases</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span className="text-gray-700">Get a customized solution demo</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span className="text-gray-700">30-minute free consultation</span>
                </li>
              </ul>
            </div>
            <div className="demo-form p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Schedule Your Demo</h3>
              <form>
                <div className="mb-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="text" 
                    placeholder="Company Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
                  />
                </div>
                <div className="mb-4">
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition">
                    <option>Select Service</option>
                    {services.map((service, index) => (
                      <option key={index}>{service}</option>
                    ))}
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition"
                >
                  Book Demo Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoBooking;