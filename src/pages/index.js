import React from 'react';
import { IndexPageWrapper } from '../styled';

if(typeof window !== undefined) {
  console.log('navigateur')
} else {
  console.log('serveur')
}

export const Index = () => {
  return (
    <IndexPageWrapper>
      <h1>IzyPaper</h1>
    </IndexPageWrapper>
  )
};

export default Index;
