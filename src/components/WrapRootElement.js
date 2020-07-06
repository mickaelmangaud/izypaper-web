import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styled';
import { UserContextProvider } from '../context';
import AppolloWrapper from '../apollo';

export const WrapRootElement = ({ element }) => {
  return (
    <UserContextProvider>
      <AppolloWrapper>
        <ThemeProvider theme={theme}>
          {element}
        </ThemeProvider>
      </AppolloWrapper>
    </UserContextProvider>
  )
}