import styled from 'styled-components';

export const PanelWrapper = styled.div`
  background-color: white;
  position: absolute;
  top: 100px;
  right: 26px;
  width: 400px;
  height: 600px;
  border-radius: 3px;
  box-shadow: 0px 5px 12px 1px rgba(100,100,100,0.2);
  font-size: 14px;
  transform: ${({isVisible}) => isVisible ? 'translateX(0px)' : 'translateX(800px)'};
  transition: all .2s ease;
  @media (max-width: 860px) {
    width: 90vw;
    top: 82px;
    height: ${({theme}) => `calc(100vh - 120px - ${theme.sizes.mobileMenuHeight})`};
    right: 5vw;
  }

  .content {
    height: 100%;
    padding: 24px 24px;
    position: relative;

    .cross {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 24px;
      color: ${({theme}) => theme.colors.turquoise};
      transition: all .3s ease;
      &:hover {
        transform: rotate(360deg);
      }
    }
  }
`;   