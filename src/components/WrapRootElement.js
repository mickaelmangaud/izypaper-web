import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styled';
import { ContextProvider } from '../context';

export const WrapRootElement = ({ element }) => {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        {element}
      </ThemeProvider>
    </ContextProvider>
  )
}