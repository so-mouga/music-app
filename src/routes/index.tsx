import { CoreLayout } from 'common/layouts/CoreLayout';
import { Discover } from 'pages/Discover';
import { Search } from 'pages/Search';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Router = (): JSX.Element => {
  return (
    <CoreLayout>
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </CoreLayout>
  );
};

export default Router;
