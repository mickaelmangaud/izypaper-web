import React, { useState } from 'react';
import { NavigationWrapper, Logo, Menu, NavButton, MenuItem } from './styled';
import { navLinks } from '../../utils';
import { Link, navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import { SideMenu, Burger } from './index';

const Navigation = () => {
  const location = useLocation();
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

  const toggleSideMenuVisible = () =>  setIsSideMenuVisible(!isSideMenuVisible);

  return (
    <NavigationWrapper>
      <Burger isSideMenuVisible={isSideMenuVisible}/>

      <SideMenu isVisible={isSideMenuVisible}/>

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
        <NavButton >Créer un compte</NavButton>
        <NavButton onClick={() => navigate('/login')}>Connexion</NavButton>
      </div>
    </NavigationWrapper>
  )
};

export default Navigation;