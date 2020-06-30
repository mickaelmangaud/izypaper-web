import React from 'react';
import { BurgerWrapper } from './styled';

const Burger = () => {
  return (
    <BurgerWrapper onClick={() => console.log('burger clicked')}>
      <input type="checkbox" />
      <span></span>
    </BurgerWrapper>
  )
};

export default Burger;