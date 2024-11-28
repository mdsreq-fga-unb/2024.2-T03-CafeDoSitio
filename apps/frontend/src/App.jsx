import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ContactPage from './pages/ContactPage'; 

const App = () => {
  useEffect(() => {
    document.title = 'Família do Sítio';
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = '/favicon.png';
    document.head.appendChild(link);
  }, []);

  return (
    <Router>
      <Routes>
          <Route path='/' element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
