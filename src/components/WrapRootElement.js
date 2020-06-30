import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styled';

export const WrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  )
}