import React from 'react';
import { navLinks } from '../../../utils';
import { Link } from 'gatsby';
import { SideMenuWrapper, LinkWrapper } from './styled';

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