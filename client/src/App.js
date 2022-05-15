import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';

import { useState, useEffect } from 'react';
import { Map, ReactMapGL, Popup, Marker } from 'react-map-gl';

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

  const [showPopup, setShowPopup] = useState(true);
  const [markers, setMarkers] = useState([])

  useEffect(()=> { 
    const getMarkers = async() => {
      try {
        const res = await axios.get("/markers");
        setMarkers(res.data); 
      } catch (err) {
        console.log(err)
      }
      }
      getMarkers()
    })

  return (
    <ApolloProvider client={client}>
      <Router>
          <Header />
            <Routes>
              {/* <Route 
                path="/"
                element={<Home />}
              /> */}
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
              <Route 
                path="/thoughts/:thoughtId"
                element={<SingleThought />}
              />
            </Routes>
      <Map
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 14
        }}
        style={{width: "100vw", height: "90vh"}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken = {'pk.eyJ1IjoibWFic2t5MDUiLCJhIjoiY2wzMWRsbXhoMDk4bTNjcW4wY3Jyb3c2YiJ9.p_wf3CHUlYeePBCasVWubA'}
      >

        {showPopup && (
        <Popup longitude={-100} latitude={40}
          anchor="bottom"
          onClose={() => setShowPopup(false)}>
            <div className="place_name">Place_name</div>
            <div className="comment">Comments</div>
            <div className='user'>User (Logged in)</div>
            <div className='timestamp'>Time Stamp</div>
        </Popup>)}


{markers.map(p=> (
        <Marker 
        longitude={p.long} 
        latitude={p.lat} anchor="bottom" >
        <img src="./red_dot.png" />
        <div>This is a Marker</div>
        </Marker>
))}

      </Map>
      </Router>
    </ApolloProvider>
  );
}

export default App;
