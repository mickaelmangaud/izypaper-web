import React from 'react';
import { GlobalStyle } from '../styled';
import { Navigation } from '../components/navigation';
import { Helmet } from 'react-helmet'

export const WrapPageElement = ({ element }) => {
  return (
    <React.Fragment>
      <GlobalStyle /> 
      <Helmet>
        <title>IzyPaper</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Helmet>
      {/* <Burger /> */}
      <Navigation />
      {element}
    </React.Fragment>
  )
}