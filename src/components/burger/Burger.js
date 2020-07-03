import React from 'react';
import { BurgerWrapper } from './styled';

const Burger = ({ isSideMenuVisible }) => {
  return (
    <BurgerWrapper isVisible={isSideMenuVisible}>
      <input type="checkbox" />
      <span></span>
    </BurgerWrapper>
  )
};

export default Burger;