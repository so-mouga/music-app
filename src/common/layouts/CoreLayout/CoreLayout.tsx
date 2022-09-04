import { Footer } from 'common/components/Footer';
import { Header } from 'common/components/Header';
import { SideBar } from 'common/components/SideBar';
import React, { FunctionComponent } from 'react';
import './_coreLayout.scss';

interface CoreLayoutProps {
  children: JSX.Element;
}

const CoreLayout: FunctionComponent<CoreLayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className="main">
      <Header />
      <SideBar />
      <div className="main__content">{children}</div>
      <Footer />
    </div>
  );
};

export default CoreLayout;
