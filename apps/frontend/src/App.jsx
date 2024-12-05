import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import ContactPage from './pages/ContactPage'; 

const App = () => {
  useEffect(() => {
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
