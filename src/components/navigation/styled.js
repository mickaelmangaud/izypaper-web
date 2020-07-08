import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  height: ${({theme}) => theme.sizes.menuHeight};
  width: 100vw;
  position: fixed;
  top: 0;
  box-shadow: 1px 1px 5px 2px rgba(80,80,80, .4);
  border: none;
  @media (max-width: 860px) {
    height:${({theme}) => theme.sizes.mobileMenuHeight};
  }
`;

export const Logo = styled.div`
  margin-right: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  font-family: 'Ubuntu', sans-serif;
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
  @media (max-width: 860px) { display: none };
`;

export const App = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  .username {
    margin: 0 24px;
    color: white;
  }

  .material-icons {
    border-radius: 50%;
    color: white;
    font-size: 48px;
    cursor: pointer;
    transition: all .2s ease;
    @media (max-width: 860px) {
      font-size: 48px;
      margin-right: 18px;
    }
    &:hover {
      background-color: white;
      color: ${({theme}) => theme.colors.primary};
      transform: scale(.85);
    }
  }
`;

export const NavButton = styled.button`
  white-space: nowrap;
  background-color: white;
  padding: 12px 18px;
  border: none;
  margin: 0 24px 0 0;
  color: ${({theme}) => theme.colors.primary};
  font-weight: 500;
  font-size: 14px;
  outline: none;
  height: 40px;
  border-radius: 40px;
  @media (max-width: 860px) {
    display: none;  
  }
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