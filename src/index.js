import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import withReduxFeatures from './withReduxFeatures';
import './index.css';
import App from './components/App';
import {ContextProvider} from './context/localStorageContext';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

/** Wrap App component with store providers */
const WrappedApp = withReduxFeatures(App);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <ContextProvider>
      <WrappedApp />
    </ContextProvider>
  </ApolloProvider>
);
