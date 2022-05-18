import React from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  useQuery,
  gql
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css"


import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Header from './components/Header';
import Mapview from './components/Mapview'

import Auth from './utils/auth';
import { QUERY_USER, QUERY_ME } from './utils/queries';

import { useState, useEffect } from 'react';
import { Map, ReactMapGL, Popup, Marker } from 'react-map-gl';

import marker_icon from './red_dot.png';
import { flash } from 'react-animations'

 

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
    
    <ApolloProvider client={client} className="Mapquery">
      <Router>
          <Header />
            <Routes>
              <Route 
                path="/login"
                element={<Login />}
              />
              <Route 
                path="/signup"
                element={<Signup />}
              />
              <Route 
                path="/me"
                element={<Profile />}
              />
              <Route 
                path="/profiles/:username"
                element={<Profile />}
              />
            </Routes>

            <Mapview />

      </Router>
    </ApolloProvider>
  );
}

export default App;