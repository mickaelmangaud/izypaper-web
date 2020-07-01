import React from 'react';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { persistCache } from 'apollo-cache-persist';

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
        uri: 'http://localhost:5000/graphql',
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
      return <div>Loading appollo cache...</div>;
    }

    return (
      <ApolloProvider client={client}>
        {this.props.children}
      </ApolloProvider>
    )
  }
}

export default AppolloWrapper