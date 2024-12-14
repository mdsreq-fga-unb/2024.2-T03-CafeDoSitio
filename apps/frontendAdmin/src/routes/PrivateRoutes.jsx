import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/(private)/HomePage";
import AuthGuard from "../components/AuthGuard/AuthGuard";
import VisitaConfigPage from "../pages/(private)/VisitaCofigPage";
import PrivateLayout from "../components/PrivateLayout";
import SacPage from "../pages/(private)/SacPage";
import VisitaDetailsPage from "../pages/(private)/VisitaDetailsPage";
import Provider from "../context/Provider";

const PrivateRoutes = () => {
  return(
    <AuthGuard>
      <Provider>
        <PrivateLayout>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/visitaConfig" element={<VisitaConfigPage />} />
            <Route path="/sac" element={<SacPage />} />  
            <Route path="/visitaConfig/:id" element={<VisitaDetailsPage />} />        
          </Routes>
        </PrivateLayout>
      </Provider>
    </AuthGuard>
  );
}

export default PrivateRoutes;