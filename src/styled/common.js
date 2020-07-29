import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { background } from '../assets/images';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    font-family: 'Ubuntu', sans-serif;
    outline: none;
  }

  html, body {
    background-color: ${({theme}) => theme.colors.primary};
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  button {
    cursor: pointer;
  }
`;

export const rotate = keyframes`
  from { opacity: 0}
  to { opacity: 1 }
`;

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: ${({theme}) => theme.colors.primary};
  color: white;
  background-image: url(${background});
  background-position: center center;
  background-size: cover;
  padding: 0;
  height: ${({theme}) => `calc(100vh - ${theme.sizes.menuHeight})`};
  margin-top: ${({theme}) => theme.sizes.menuHeight};
  animation: ${rotate} .3s ease;
  padding: 36px;
  overflow-y: scroll;
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
  &::-webkit-scrollbar { width: 4px }
  &::-webkit-scrollbar-thumb {
    background-color: white;
    outline: 1px solid slategrey;
    border-radius: 5px;
  }
  @media (max-width: 760px) {
    height: ${({theme}) => `calc(100vh - ${theme.sizes.mobileMenuHeight})`};
    margin-top:${({theme}) => theme.sizes.mobileMenuHeight};
    padding: 0;
  }

  //
  font-size: 54px;
`;