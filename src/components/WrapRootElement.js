import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styled';
import { UserContextProvider, UiContextProvider } from '../context';
import AppolloWrapper from '../apollo';

export const WrapRootElement = ({ element }) => (
  <Wrapper>
    {element}
  </Wrapper>
)

const Wrapper = ({ children }) => {
  return (
    <UiContextProvider>
      <UserContextProvider>
        <AppolloWrapper>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppolloWrapper>
      </UserContextProvider>
    </UiContextProvider>
  )
};