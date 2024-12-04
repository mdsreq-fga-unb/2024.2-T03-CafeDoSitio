import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NossaHistoria from './pages/nossaHistoria'

const App = () => {
  useEffect(() => {
  }, []);

  return (
    <Router>
      <Routes>
          <Route path='/nossaHistoria' element={<NossaHistoria />} />
      </Routes>
    </Router>
  );
};

export default App
