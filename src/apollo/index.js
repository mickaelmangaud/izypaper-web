import React from 'react';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { persistCache } from 'apollo-cache-persist';
import { Loader } from '../components';

class AppolloWrapper extends React.Component {
  state = {
    client: null,
    loaded: false,
  };

  async componentDidMount() {
    const cache = new InMemoryCache();

    const client = new ApolloClient({
      cache: cache,
      link: new HttpLink({
        uri: `${process.env.GATSBY_BASE_API_URL}/graphql`,
        credentials: 'include'
      })
    });

    if (window && typeof window !== undefined) {
      await persistCache({
        cache,
        storage: window.localStorage,
      });
    }

    this.setState({
      client,
      loaded: true,
    });
    
  }


  render() {
    const { client, loaded } = this.state;

    if (!loaded) {
      return <h1>Loading Apollo Cache</h1>;
    }

    return (
      <ApolloProvider client={client}>
        {this.props.children}
      </ApolloProvider>
    )
  }
}

export default AppolloWrapper