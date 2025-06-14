import React from "react";
import Header from "./header";
import Footer from "./footer/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden">
      <Header />

   
      <main className="flex-1 overflow-auto min-h-[calc(100vh-80px]">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
