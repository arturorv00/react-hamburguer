import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
      <NavigationItem link="/" active>Burger Builder</NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  </div>
);

export default navigationItems;
