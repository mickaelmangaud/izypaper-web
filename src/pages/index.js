import React from 'react';
import { IndexPageWrapper } from '../styled';



export const Index = () => {
  if(typeof window !== undefined) {
    console.log('navigateur')
  } else {
    console.log('serveur')
  }

  return (
    <IndexPageWrapper>
      <h1>IzyPaper</h1>
    </IndexPageWrapper>
  )
};

export default Index;
