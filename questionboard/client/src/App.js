import React from 'react';
import { BrowserRouter as Router, Routes, Route, }
  from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Terms from './pages/Terms-page'
import Dashboard from './pages/Dashboard-page';
import Donate from './pages/Donate-page';
import Privacy from './pages/Privacy-page';
import Questions from './pages/Questions-page.js';
import Signin from './pages/Signin-page.js';
import Support from './pages/Support-page';
import Register from './pages/Register-page';
// import / from '/';
// import/ from '/';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Routes>
            <Route
              path="/"
              element={<Register />}
            />
            <Route
              path="/signin"
              element={<Signin />}
            />
            <Route
              path="/terms"
              element={<Terms />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
            <Route
              path="/donate"
              element={<Donate />}
            />
            <Route
              path="/privacy"
              element={<Privacy />}
            />
            <Route
              path="/questions"
              element={<Questions />}
            />
            <Route
              path="/support"
              element={<Support />}
            />
            <Route
              path="*"
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;