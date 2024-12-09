import React from "react";
import Header from "../Header";
import { Centralização, Layout, Space } from "./styled";

const PrivateLayout = ({children}) => {
  return(
    <>
      <Header />
      <Space />
      <Centralização>
        <Layout>
          <main>{children}</main>
        </Layout>
      </Centralização>
    </>
  );
};

export default PrivateLayout;