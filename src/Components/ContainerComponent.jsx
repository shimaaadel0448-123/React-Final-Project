import React from 'react';
import SpreadshopBanner from './SpreadshopBanner';
import ProductList from './ProductList';
import VideoComponent from './VideoComponent';
import IconsComponent from './IconsComponent';

// Import the CSS file
import './ContainerComponent.css';

const ContainerComponent = () => {
  return (
    <div className="container-component">
      <SpreadshopBanner />
      <ProductList />
      <VideoComponent />
      <IconsComponent />
    </div>
  );
};

export default ContainerComponent;
