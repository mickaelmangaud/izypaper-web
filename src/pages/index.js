import React from 'react';
import { IndexPageWrapper } from '../styled';
import { gql, useQuery } from '@apollo/client';

export const Index = () => {
  const { loading, error, data } = useQuery(USERS_QUERY);

  if (data) {
    console.log(data)
  }

  return (
    <IndexPageWrapper>
      <h1>IzyPaper</h1>
    </IndexPageWrapper>
  )
};

const USERS_QUERY = gql`
{
  users {
    id
    email
  }
}
`;

export default Index;
