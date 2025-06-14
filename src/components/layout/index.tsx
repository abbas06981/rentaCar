import React from 'react';
import Header from './header';
import Footer from './footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
