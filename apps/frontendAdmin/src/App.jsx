import React from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';

function App() {
  return (
    <Router>
      <Routes>
        {/* ROTAS PÚBLICAS: */}
        <Route path='/*' element={<PublicRoutes />} />

        {/* ROTAS PRIVADAS: */}
        <Route path='/admin/*' element={<PrivateRoutes />} />
      </Routes>
    </Router>
  );
};

export default App;
