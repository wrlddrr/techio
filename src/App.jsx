import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AISolutions from './components/AISolutions';
import TechStack from './components/TechStack';
import DemoBooking from './components/DemoBooking';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

function App() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="min-h-screen">
      <Navbar toggleModal={() => setShowModal(true)} />
      <Hero toggleModal={() => setShowModal(true)} />
      <About />
      <Services />
      <AISolutions toggleModal={() => setShowModal(true)} />
      <TechStack />
      <DemoBooking />
      <Footer />
      {showModal && <DemoModal closeModal={() => setShowModal(false)} />}
    </div>
  );
}

export default App;