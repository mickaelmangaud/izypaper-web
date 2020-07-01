import React, {  useRef, useEffect, useState } from 'react';
import { Wrapper, Logo, Menu, App, NavButton, MenuItem } from './styled';
import { navLinks } from '../../utils';
import { Link, navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import { Panel, Burger } from '..';

const Navigation = () => {
  const location = useLocation();
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);
  const panelRef = useRef(null);

  const handleTogglePanel = () => setIsPanelVisible(!isPanelVisible);
  const toggleSideMenuVisible = () => {
    console.log('setIsSideMenuVisible(true)')
    setIsSideMenuVisible(!isSideMenuVisible)
  };

  useEffect(() => {
    const handleClickOutside = (e) => panelRef.current && !panelRef.current.contains(e.target) && setIsPanelVisible(false);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('clic', handleClickOutside);
  }, [panelRef]);
  
  return (
    <Wrapper>
      <div onClick={toggleSideMenuVisible}>
        <Burger isSideMenuVisible={isSideMenuVisible} />
      </div>
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
      
      <NavButton onClick={() => navigate('/login')}>Connexion</NavButton>

      <App ref={panelRef}>
        <span className="material-icons" onClick={handleTogglePanel}>
            account_circle
        </span>
        <Panel isVisible={isPanelVisible}/>
      </App>
    </Wrapper>
  )
};

export default Navigation;