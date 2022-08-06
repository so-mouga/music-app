import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from 'pages/Home/App';

const Router = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </div>
  );
};

export default Router;
