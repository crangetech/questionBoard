import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Dashboard from './components/dashboard-comp.js';
import Donate from './components/donate-comp.js';
import Privacy from './components/privacy-comp.js';
import Questions from './components/questions-comp.js';
import Signin from './components/signin-comp.js';
import Support from './components/Support-comp.js';
import Terms from './components/terms-comp.js';
import Register from './components/register-comp.js';
import Questions from './components/questions-comp.js';
import Footer from './components/footer-comp.js';
import Header from './components/header-comp.js';
import Nav from './components/Nav-comp.js';
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
          <Navbar />
          <Navbar />
          <Navbar />
          <Navbar />
          <Navbar />
          <Navbar />
          
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
              path="/header" 
              element={<Header />} 
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
                 
                 
                 
                 
                 
                  <Route 
              path="/footer" 
              element={<Footer />} 
            />
           
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;