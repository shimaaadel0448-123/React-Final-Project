import React from 'react';
import SpreadshopBanner from './SpreadshopBanner';
import ProductList from './ProductList';
import VideoComponent from './VideoComponent';
import IconsComponent from './IconsComponent';
import './ContainerComponent.css';

const ContainerComponent = () => {
  return (
    <div className="container-component">
      <SpreadshopBanner />
      <ProductList />
      <VideoComponent />
    </div>
  );
};

export default ContainerComponent;
