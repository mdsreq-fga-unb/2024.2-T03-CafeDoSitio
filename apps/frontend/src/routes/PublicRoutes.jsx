import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactPage from "../pages/(public)/ContactPage";
import NossaHistoria from "../pages/(public)/nossaHistoria";
import BlogPage from "../pages/(public)/BlogPage";
import NossosProdutos from "../pages/(public)/nossosProdutos";
import NossosProdutosInfo from "../pages/(public)/nossosProdutosInfo";

import PublicLayout from "../components/PublicLayout";

const PublicRoutes = () => {
  return(
    <PublicLayout>
      <Routes>
          <Route path="/" element={<BlogPage />} />
          <Route path="/contatos" element={<ContactPage />} />
          <Route path="/historia" element={<NossaHistoria />} />
          <Route path="/produtos" element={<NossosProdutos />} />
          <Route path="/produtos/:id" element={<NossosProdutosInfo />} />
      </Routes>
    </PublicLayout>
  );
}

export default PublicRoutes;