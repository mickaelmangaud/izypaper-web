import React, {  useRef, useEffect, useState, useContext } from 'react';
import { Wrapper, Logo, Menu, App, NavButton, MenuItem } from './styled';
import { navLinks } from '../../utils';
import { Link, navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import { Panel , SideMenu, Burger } from './index';
import { UserContext } from '../../context';

const Navigation = () => {
  const { context } = useContext(UserContext);
  const location = useLocation();
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);
  const panelRef = useRef(null);
  const sideMenuRef = useRef(null);

  const handleTogglePanel = () => setIsPanelVisible(!isPanelVisible);
  const toggleSideMenuVisible = () =>  setIsSideMenuVisible(!isSideMenuVisible);

  useEffect(() => {
    const handleClickOutside = e => panelRef.current && !panelRef.current.contains(e.target) && setIsPanelVisible(false);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('clic', handleClickOutside);
  }, [panelRef, sideMenuRef]);
  

  return (
    <Wrapper>
      <div onClick={toggleSideMenuVisible}>
        <Burger isSideMenuVisible={isSideMenuVisible} />
      </div>
      <div ref={sideMenuRef}>
        <SideMenu isVisible={isSideMenuVisible}/>
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
      
      
      {!context.user 
      ? <>
          <NavButton onClick={() => navigate('/register')}>Créer un compte</NavButton>
          <NavButton onClick={() => navigate('/login')}>Connexion</NavButton>
        </>

      :  <App ref={panelRef}>
          <p className="username">{context.user.email}</p>
          <span className="material-icons usericon" onClick={handleTogglePanel}>
            account_circle
          </span>
          <Panel 
            isVisible={isPanelVisible}
            setIsPanelVisible={setIsPanelVisible}
            user={context.user}
          />
        </App>
      }
    </Wrapper>
  )
};

export default Navigation;