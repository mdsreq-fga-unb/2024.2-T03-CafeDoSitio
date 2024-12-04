import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NossaHistoria from './pages/nossaHistoria'
import ContactPage from './pages/ContactPage'; 


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
