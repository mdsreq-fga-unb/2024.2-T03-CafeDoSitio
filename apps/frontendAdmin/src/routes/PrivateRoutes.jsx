import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/(private)/HomePage";
import AuthGuard from "../components/AuthGuard/AuthGuard";
import VisitaConfigPage from "../pages/(private)/VisitaCofigPage";
import PrivateLayout from "../components/PrivateLayout";
import SacPage from "../pages/(private)/SacPage";
import VisitaDetailsPage from "../pages/(private)/VisitaDetailsPage";
import AdminAccountsPage from "../pages/(private)/AdminAccountsPage";
import BlogsListPage from "../pages/(private)/BlogsListPage";
import EditBlogsPage from "../pages/(private)/EditBlogsPage";
import EditAccountPage from "../pages/(private)/EditAccountPage";

const PrivateRoutes = () => {
  return(
    <AuthGuard>
        <PrivateLayout>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/visitaConfig" element={<VisitaConfigPage />} />
            <Route path="/sac" element={<SacPage />} />  
            <Route path="/visitaConfig/:id" element={<VisitaDetailsPage />} />  
            <Route path="/accounts" element={<AdminAccountsPage />} />   
            <Route path="/blog" element={<BlogsListPage />} />
            <Route path="/blog/:id" element={<EditBlogsPage />} />
            <Route path="/editAccount" element={<EditAccountPage />} />
          </Routes>
        </PrivateLayout>
    </AuthGuard>
  );
}

export default PrivateRoutes;