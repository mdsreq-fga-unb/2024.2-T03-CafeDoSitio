import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import ContactPage from './pages/ContactPage'; 
import NossaHistoria from './pages/nossaHistoria'


const App = () => {
  useEffect(() => {
  }, []);

  return (
    <Router>
      <Routes>        
          <Route path='/' element={<ContactPage />} />
          <Route path='/nossaHistoria' element={<NossaHistoria />} />
      </Routes>
    </Router>
  );
};

export default App;
