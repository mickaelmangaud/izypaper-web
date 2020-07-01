import React,{ useRef, useEffect } from 'react';
import { BurgerWrapper } from './styled';
import { SideMenu } from '..';

const Burger = ({ isSideMenuVisible }) => {
  const sideMenuRef = useRef();

  return (
    <BurgerWrapper isVisible={isSideMenuVisible}>
      <SideMenu isVisible={isSideMenuVisible} ref={sideMenuRef}/>
      <input type="checkbox" />
      <span></span>
    </BurgerWrapper>
  )
};

export default Burger;