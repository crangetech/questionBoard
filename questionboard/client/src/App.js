import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Dashboard from './pages/dashboard-page.js';
import Donate from './pages/donate-page.js';
import Privacy from './pages/privacy-page.js';
import Questions from './pages/questions-page.js';
import Signin from './pages/signin-page.js';
import Support from './pages/Support-page.js';
import Terms from './pages/terms-page.js';
import Register from './pages/register-page.js';
import Questions from './pages/questions-page.js';


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
      <Route 
              path="/header" 
              element={<Header />} 
            /> 
        <>
       
          
          <Routes>
            <Route 
              path="/" 
              element={<Register />} 
            />
            <Route 
              path="/sign-in" 
              element={<Signin />} 
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
              path="/nav" 
              element={<Nav />} 
            />
                  <Route 
              path="/privacy" 
              element={<Privacy/>} 
            />
                  <Route 
              path="/questions" 
              element={<Questions />} 
            />
                  <Route 
              path="/register" 
              element={<Register />} 
            />
                <Route 
              path="/support" 
              element={<Support />} 
            />
                       <Route 
              path="/terms" 
              element={<Terms />} 
            />
                 
                 
                 
                 
                 
       
           
          </Routes>
        </>
        <Route 
              path="/footer" 
              element={<Footer />} 
            />
      </Router>
    </ApolloProvider>
  );
}

export default App;