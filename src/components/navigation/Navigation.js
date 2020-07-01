import React, { useContext } from 'react';
import { Wrapper, Logo, Menu, App, NavButton, MenuItem } from './styled';
import { navLinks } from '../../utils';
import { Link, navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import { Context } from '../../context';

const Navigation = () => {
  const location = useLocation();
  const { context, setContext } = useContext(Context);

  const togglePanel = () => setContext({ ...context, menuOpen: !context.menuOpen });

  return (
    <Wrapper>
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

      <App>
        <span
          onClick={togglePanel}
          className="material-icons">
            account_circle
        </span>
      </App>
    </Wrapper>
  )
};

export default Navigation;