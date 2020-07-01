import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styled';
import { ContextProvider } from '../context';
import AppolloWrapper from '../apollo';

export const WrapRootElement = ({ element }) => {
  return (
    <ContextProvider>
      <AppolloWrapper>
        <ThemeProvider theme={theme}>
          {element}
        </ThemeProvider>
      </AppolloWrapper>
    </ContextProvider>
  )
}