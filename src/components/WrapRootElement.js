import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styled';
import { UiContextProvider } from '../context';

export const WrapRootElement = ({ element }) => (
  <UiContextProvider>
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  </UiContextProvider>
);