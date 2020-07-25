import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  padding: 0 24px;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  height: ${({theme}) => theme.sizes.menuHeight};
  width: 100vw;
  position: fixed;
  top: 0;
  box-shadow: 1px 1px 5px 1px rgba(0,0,0, 0.2);
  border: none;
  @media (max-width: 860px) {
    height:${({theme}) => theme.sizes.mobileMenuHeight};
  }
  @media (max-width: 1080px) {
    padding: 0;
  }
`;

export const BurgerWrapper = styled.div`
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

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  color: white;
  @media (max-width: 1080px) {
    margin: 0 0 0 135px ;
  }
  @media (max-width: 860px) {
    width: 100%;
    margin: 0 72px 0 0;
  }
  
  .material-icons { 
    color: white;
    font-size: 36px
  }; 

  a {
    color: white;
    text-decoration: none;
    font-size: 38px;
    @media (max-width: 860px) {
      font-size: 28px;
    }
  }
`;

export const Menu = styled.ul`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin-right: 24px;
  @media (max-width: 1080px) { display: none };
`;

export const MenuItem = styled.li`
    height: 100%;
    cursor: pointer;
    border-bottom: ${({active}) => active ? '4px solid white' : ''};
    &:hover {
      background-color: rgba(255,255,255, .2);
    }

    a {
      height: 100%;
      width: 100%;
      padding: 0 24px;
      display: flex;
      align-items: center;
      color: white;
      font-family: 'Ubuntu', sans-serif;
      text-decoration: none; 
      white-space: nowrap;
      position: relative;
      top: ${({active}) => active ? '2px' : ''};
    }
`;

export const NavButton = styled.a`
  white-space: nowrap;
  background-color: white;
  padding: 12px 18px;
  border: none;
  margin: 0 24px 0 0;
  color: ${({theme}) => theme.colors.primary};
  font-size: 14px;
  outline: none;
  height: 40px;
  border-radius: 40px;
  text-decoration: none;
  @media (max-width: 860px) {
    display: none;
  }
`;