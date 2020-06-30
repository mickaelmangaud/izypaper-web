import React from 'react';
import { Wrapper, Logo, Menu, App, NavButton, MenuItem } from './styled';
import { navLinks } from '../../utils';
import { Link } from 'gatsby';

const Navigation = (props) => {
  return (
    <Wrapper>
      <Logo>
        <span className="material-icons">attach_file</span>
        <Link to={'/'}>IzyPaper</Link>
      </Logo>

      <Menu>
        {navLinks.map(({path, label}) => 
          <MenuItem
            // active={path === location.pathname}
            key={path}>
            <Link to={path}>{label}</Link>
          </MenuItem>
        )}
      </Menu>
      <NavButton>Connexion</NavButton>

      <App>
        <span 
          className="material-icons">
            account_circle
        </span>
      </App>
    </Wrapper>
  )
};

export default Navigation;