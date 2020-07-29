import React from 'react';
import { NavigationWrapper, Logo, Menu, NavButton, MenuItem, BurgerWrapper } from './styled';
import { navLinks } from '../../utils';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import { SideMenu } from './index';

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