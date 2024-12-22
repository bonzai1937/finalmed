import React from 'react';
import MainLayout from 'layouts/main-layout';
import TrendingNFTs from 'components/sections/dashboard/trending-nfts';

const Dashboard = () => {
  return (
    <MainLayout>
      <TrendingNFTs />
    </MainLayout>
  );
};

export default Dashboard;
