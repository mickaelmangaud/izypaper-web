import styled from 'styled-components';

export const BurgerWrapper = styled.div`
  z-index: 100;
  position: absolute;
  top: 22px;
  left: 18px;
  width: 36px;
  height: 36px;
  transform: scale(.7);
  @media (min-width: 860px) {
    display: none;
  }

  input {
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    z-index: 100000000000;
    opacity: 0;
    cursor: pointer;
    &:checked {
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
    width: 100%;
    height: 4px;
    background: #000;
    margin-top: 10px;
    transition: all 0.1s;
    &:before, &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 4px;
      background: #fff;
      top: -12px;
      transition: all 0.3s;
    }
    &:after {
      top: 12px;
    }
  }
`;