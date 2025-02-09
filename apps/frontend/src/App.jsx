import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  useEffect(() => {
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <Routes>
            <Route path='/*' element={<PublicRoutes />} />          
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
