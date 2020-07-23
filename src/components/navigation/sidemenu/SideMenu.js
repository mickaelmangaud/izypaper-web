import React from 'react';
import styled from 'styled-components';
import { navLinks } from '../../../utils';
import { Link } from 'gatsby';

const LinkWrapper = styled.li`
  list-style: none;
  text-align: right;
  margin-bottom: 12px;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-size: 8vw;
  }
`;

const SideMenuWrapper = styled.ul`
  height: 100vh;
  width: 100vw;
  padding: 20%;
  /* z-index: 10; */
  background-color: white;
  box-shadow: 0px 5px 12px 1px rgba(100,100,100,0.5);
  transform: ${({ isVisible}) => isVisible ? 'translateX(0)': 'translateX(-100vw)'};
  position: absolute;
  top: 0;
  left: 0;
  transition: all .2s ease;
  @media (min-width: 1080px) {
    display: none;  
  }

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: space-between;
  }
`;


const SideMenu = ({ isVisible, setIsSideMenuVisible }) => {
  const handleClickLink = () => setIsSideMenuVisible(false);
  return (
    <SideMenuWrapper isVisible={isVisible}>
      {navLinks.map(({label, path}) => (
        <LinkWrapper>
          <Link 
            to={path}
            onClick={handleClickLink}>
              {label}
            </Link>
        </LinkWrapper>
      ))}
    </SideMenuWrapper>
  )
};

export default SideMenu;