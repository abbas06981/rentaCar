import React from "react";
import Layout from "../layout";
type Props = {
  children: React.ReactNode;
};

const ProtectedRoutes = ({ children }: Props) => {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
};

export default ProtectedRoutes;
