import React from 'react';
import { GlobalStyle } from '../styled';
import { Navigation } from '../components/navigation';

export const WrapPageElement = ({ element }) => {
  return (
    <React.Fragment>
      <GlobalStyle /> 
      {/* <Burger /> */}
      <Navigation />
      {element}
    </React.Fragment>
  )
}