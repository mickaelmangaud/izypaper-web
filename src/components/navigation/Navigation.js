import React from 'react';
import { NavigationWrapper, Logo, Menu, NavButton, MenuItem } from './styled';
import { navLinks } from '../../utils';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import { SideMenu, Burger } from './index';
import styled from 'styled-components';

const BurgerWrapper = styled.div`
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  transform: scale(1.5);
  @media (min-width: 1080px) {
    display: none;  
  }

  .material-icons {
    color: ${({ theme, isSideMenuVisible }) => isSideMenuVisible ? theme.colors.primary : 'white' };
    padding: 6px;
    overflow: visible;
    font-size: 1.5rem;
    text-align: center;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 50%;
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
`;



const Navigation = () => {
  const location = useLocation();
  const [isSideMenuVisible, setIsSideMenuVisible] = React.useState(false);
  const handleClickBurger = () => setIsSideMenuVisible(!isSideMenuVisible);

  return (
    <NavigationWrapper>
      
      <BurgerWrapper className="burger" onClick={handleClickBurger} isSideMenuVisible={isSideMenuVisible}>
        <span className="material-icons">
          {isSideMenuVisible ? 'menu_open' : 'menu'}
        </span>
      </BurgerWrapper>

      <SideMenu isVisible={isSideMenuVisible} setIsSideMenuVisible={setIsSideMenuVisible}/>
      <Logo>
        <span className="material-icons">attach_file</span>
        <Link to={'/'}>IzyPaper</Link>
      </Logo>

      <Menu>
        {navLinks.map(({path, label}) => 
          <MenuItem
            active={path === location.pathname}
            key={path}>
            <Link to={path}>{label}</Link>
          </MenuItem>
        )}
      </Menu>
      
      <div className="buttons">
        <NavButton href="https://app.izypaper.com">Inscription</NavButton>
        <NavButton href="https://app.izypaper.com">Connexion</NavButton>
      </div>
    </NavigationWrapper>
  )
};

export default Navigation;