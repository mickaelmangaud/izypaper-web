import React from 'react';
import { GlobalStyle } from '../styled';
import { Navigation, Burger, Panel, SideMenu } from './index';
import { Helmet } from 'react-helmet';

export const WrapPageElement = ({ element }) => {
  return (
    <React.Fragment>
      <GlobalStyle /> 
      <Helmet>
        <title>IzyPaper</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Burger />
      <Panel />
      <Navigation />
      <SideMenu />
      {element}
    </React.Fragment>
  )
}