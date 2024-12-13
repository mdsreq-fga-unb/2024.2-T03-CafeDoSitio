import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import ContactPage from './pages/(public)/ContactPage'; 
import NossaHistoria from './pages/(public)/nossaHistoria'
import BlogPage from './pages/(public)/BlogPage';


const App = () => {
  useEffect(() => {
  }, []);

  return (
    <Router>
      <Routes>
          <Route path='/' element={<BlogPage />} />
          <Route path='/contatos' element={<ContactPage />} />
          <Route path='/nossaHistoria' element={<NossaHistoria />} />
      </Routes>
    </Router>
  );
};

export default App;
