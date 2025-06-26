import React from 'react';

const Footer = () => {
  const footerLinks = {
    services: ['Web Development', 'App Development', 'UI/UX Design', 'AI Solutions', 'Data Labeling'],
    company: ['About Us', 'Our Team', 'Projects', 'Careers', 'Blog'],
    contact: [
      { icon: 'fas fa-map-marker-alt', text: '123 Innovation Drive, Tech City, TC 10001' },
      { icon: 'fas fa-phone-alt', text: '+1 (555) 123-4567' },
      { icon: 'fas fa-envelope', text: 'info@nexusdigital.com' }
    ]
  };

  return (
    <footer className="footer py-16">
      <div className="container mx-auto px-4 md:px-8 footer-content">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="ml-3 text-xl font-bold text-white font-['Raleway']">NEXUS DIGITAL</span>
            </div>
            <p className="text-gray-400 mb-4">
              Creating intelligent digital solutions that drive business growth and innovation.
            </p>
            <div className="flex space-x-4">
              {['facebook-f', 'twitter', 'linkedin-in', 'instagram'].map((platform) => (
                <a 
                  key={platform} 
                  href="#" 
                  className="text-gray-400 hover:text-white transition"
                >
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition">{service}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((contact, index) => (
                <li key={index} className="flex items-start">
                  <i className={`${contact.icon} mt-1 mr-3 text-gray-400`}></i>
                  <span className="text-gray-400">{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="footer-divider mt-12 pt-8 text-center">
          <p className="text-gray-500">© 2023 Nexus Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;