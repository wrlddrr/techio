import React from 'react';

const DemoModal = ({ closeModal }) => {
  return (
    <div className="demo-modal fixed inset-0 bg-black/50 z-[1000] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Book a Demo</h3>
          <button 
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Company</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Preferred Date</label>
            <input 
              type="date" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Message (Optional)</label>
            <textarea 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition" 
              rows="3"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition"
          >
            Schedule Demo
          </button>
        </form>
      </div>
    </div>
  );
};

export default DemoModal;