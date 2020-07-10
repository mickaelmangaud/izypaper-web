import styled from 'styled-components';

export const BurgerWrapper = styled.div`
  z-index: 100;
  width: 90px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1080px) {
    display: none;
  }
  @media (min-width: 1080px) {
    width: 72px;
  }
  

  input {
    position: absolute;
    top: -7px;
    left: -3px;
    width: ${({theme}) => theme.sizes.mobileMenuHeight};
    height: 80%;
    z-index: 100000000000;
    opacity: 0;
    cursor: pointer;
    &:checked {
      transform: translateX(-6px);
      + span {
        background: transparent;
        &:after {
          transform: rotate(45deg) translate(-1px, -12px);
        }
        &:before {
          transform: rotate(-45deg) translate(-4px, 16px);
        }
      }
    }
  }
  span {
    position: absolute;
    z-index: 1000;
    width: 30px;
    height: 4px;
    background: #fff;
    transition: all 0.1s;
    &:before, &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 4px;
      background: ${({isVisible, theme}) => isVisible ? theme.colors.primary : '#fff'};
      top: -12px;
      transition: all 0.3s;
    }
    &:after {
      top: 12px;
    }
  }
`;