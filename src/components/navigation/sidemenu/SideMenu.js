import React from 'react';
import styled from 'styled-components';

const SideMenuWrapper = styled.div`
  transform: ${({ isVisible}) => isVisible ? 'translateX(0)': 'translateX(-100vw)'};
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: white;
  box-shadow: 0px 5px 12px 1px rgba(100,100,100,0.5);
  transition: all .2s ease;
  @media (min-width: 860px) {
    display: none;  
  }
`;

const SideMenu = ({ isVisible }) => {
  return (
    <SideMenuWrapper isVisible={isVisible}>

    </SideMenuWrapper>
  )
};

export default SideMenu;