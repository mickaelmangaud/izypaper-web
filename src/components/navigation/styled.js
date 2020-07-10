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
  @media (max-width: 1000px) {
    padding: 0;
  }
`;

export const Logo = styled.div`
  /* margin-right: 72px; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 250px; */
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  color: white;
  .material-icons { color: white; font-size: 36px }; 
  @media (max-width: 860px) {
    width: 100%;
  }

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
  @media (max-width: 1000px) { display: none };
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

export const NavButton = styled.button`
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
  @media (max-width: 860px) {
    display: none;
  }
`;