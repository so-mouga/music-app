import { Footer } from 'common/components/Footer';
import { Header } from 'common/components/Header';
import { SideBar } from 'common/components/SideBar';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { fetchToken } from 'services/spotify';
import './_coreLayout.scss';

interface CoreLayoutProps {
  children?: JSX.Element;
}

const CoreLayout: FunctionComponent<CoreLayoutProps> = ({ children }): JSX.Element => {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    fetchToken()
      .then(setIsLoad)
      .catch(() => setIsLoad(false));
  }, []);

  if (!isLoad) {
    return <p>Is loading</p>;
  }

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
