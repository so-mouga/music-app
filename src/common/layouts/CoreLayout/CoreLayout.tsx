import { Footer } from 'common/components/Footer';
import { Header } from 'common/components/Header';
import { SideBar } from 'common/components/SideBar';
import React, { FunctionComponent } from 'react';

interface CoreLayoutProps {
  children: JSX.Element;
}

const CoreLayout: FunctionComponent<CoreLayoutProps> = ({ children }): JSX.Element => {
  return (
    <div>
      <Header />
      <SideBar />
      {children}
      <Footer />
    </div>
  );
};

export default CoreLayout;
