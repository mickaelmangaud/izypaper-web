import React from 'react';
import { NavigationWrapper, Logo, Menu, NavButton, MenuItem } from './styled';
import { navLinks } from '../../utils';
import { Link, navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import { SideMenu, Burger } from './index';

const Navigation = () => {
  const location = useLocation();

  return (
    <NavigationWrapper>
      <Burger />
      <SideMenu />
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
        <NavButton href="https://app.izypaper.com/inscription">Inscription</NavButton>
        <NavButton href="https://app.izypaper.com/login">Connexion</NavButton>
      </div>
    </NavigationWrapper>
  )
};

export default Navigation;