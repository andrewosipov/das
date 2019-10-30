import React from 'react';
import App from '../components/App';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const token = "33f2233ba6455c6502099380260f395acae22ce1";

const httpLink = {
    uri: 'https://api.github.com/graphql',
    headers: {
        authorization: `Bearer ${token}`
    }
};

const client = new ApolloClient({
    link: new HttpLink(httpLink),
    cache: new InMemoryCache()
});

const repoQuery = gql`
      query($query: String!){
        search(query: $query, last: 100, type: REPOSITORY) {
          edges {
            node {
              ... on Repository {
                id
                name
                description
                url
                createdAt
                pushedAt
                stargazers {
                    totalCount
                }
                licenseInfo {
                  id
                  name
                }
              }
            }
          }
        }
      }
    `;

const date = `${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-01`; // все репо от начала месяца

export default (props) => {
    const { state } = props;
    const { name, license } = state;
    const licenseQuery = license !== '*' ? `license:${license}` : '';
    const AppWithData = graphql(
        repoQuery,
        {
            options: {
                variables: {
                    query: 'name:' + name + licenseQuery + '  language:JavaScript created:>' + date + ' sort:stars'
                }
            }
        }
    )(App);

    return (
        <ApolloProvider client={client}>
            <AppWithData {...props} />
        </ApolloProvider>
    );
}
