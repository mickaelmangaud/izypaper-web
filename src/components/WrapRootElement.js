import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styled';
import { UserContextProvider, UiContextProvider } from '../context';

export const WrapRootElement = ({ element }) => (
  <Wrapper>
    {element}
  </Wrapper>
)

const Wrapper = ({ children }) => {
  return (
    <UiContextProvider>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </UiContextProvider>
  )
};