import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';

const App = () => {
  useEffect(() => {
  }, []);

  return (
    <Router>
      <Routes>
          <Route path='/*' element={<PublicRoutes />} />
          
      </Routes>
    </Router>
  );
};

export default App;
