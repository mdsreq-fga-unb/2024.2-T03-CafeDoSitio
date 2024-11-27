import React, { useEffect } from 'react';
import ContactSection from './components/ContactSection/ContactSection'; 

const App = () => {
  useEffect(() => {
    document.title = 'Família do Sítio';
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = '/favicon.png';
    document.head.appendChild(link);
  }, []);

  return (
    <div>
      <ContactSection />
    </div>
  );
};

export default App;
