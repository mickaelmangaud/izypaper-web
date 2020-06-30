import React from 'react';
import styled from 'styled-components';

const SideMenuWrapper = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 300px;
  background-color: white;
  box-shadow: 0px 5px 12px 1px rgba(100,100,100,0.5);
  @media (min-width: 860px) {
    display: none;  
  }
`;

const SideMenu = () => {
  return (
    <SideMenuWrapper>

    </SideMenuWrapper>
  )
};

export default SideMenu;