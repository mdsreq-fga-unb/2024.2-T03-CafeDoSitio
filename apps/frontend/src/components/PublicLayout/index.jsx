  import React from "react";
  import Header from "../Header";
  import Footer from "../Footer";
  import { Centralização, Layout } from "./styled";

  const PublicLayout = ({ children, fullWidth = false, hideFooter = false }) => {
    return (
      <>
        <Header />
        {fullWidth ? (
          <main>{children}</main> // Remove a restrição
        ) : (
          <Centralização>
            <Layout>
              <main>{children}</main>
            </Layout>
          </Centralização>
        )}
        {!hideFooter && <Footer />} {/* Condiciona a exibição do Footer */}
      </>
    );
  };
  
  export default PublicLayout;
  
