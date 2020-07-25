import styled, { createGlobalStyle, keyframes } from 'styled-components';

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
    background-color: #eee;
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
  width: 100vw;
  background-color: #fff;
  height: ${({theme}) => `calc(100vh - ${theme.sizes.menuHeight})`};
  margin-top: ${({theme}) => theme.sizes.menuHeight};
  animation: ${rotate} .1s ease;
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
  @media (max-width: 860px) {
    height: ${({theme}) => `calc(100vh - ${theme.sizes.mobileMenuHeight})`};
    margin-top:${({theme}) => theme.sizes.mobileMenuHeight};
    padding: 24px;
  }
`;