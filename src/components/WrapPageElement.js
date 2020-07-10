import React, { useContext } from 'react';
import { GlobalStyle } from '../styled';
import { Navigation } from './index';
import { Helmet } from 'react-helmet';
import { UiContext } from '../context';

export const WrapPageElement = ({ element }) => (
  <Wrapper>
    {element}
  </Wrapper>
)

const Wrapper = ({ children }) => {
  const { uiContext, setUiContext } = useContext(UiContext);
  return (
    <div>
      <GlobalStyle />
      <Helmet>
        <title>IzyPaper</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Navigation />
      {children}
    </div>
  )
};