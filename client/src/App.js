import { useState, useEffect } from 'react';
import { Map, ReactMapGL, Popup, Marker } from 'react-map-gl';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Button from './components/Button';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { Button } from 'bootstrap';


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


const App = (props) => {
  const [showPopup, setShowPopup] = useState(true);
  const [marker, setMarkers] = useState([])

//   useEffect(() => {
//     const getMarkers = async () => {
//       try {
//         const res = await axios.get('./markers');
//         setMarkers(res.data);
//       } catch(err) {
//         console.log(err)
//       }
// }})


return (
  <ApolloProvider client={client}>
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Routes>
      
            <Route 
              path="/login"
              element={<Login />}
            />
            <Route 
              path="/signup"
              element={<Signup />}
            />

</Routes>

   <Map
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 14
      }}
      style={{width: "90vw", height: "90vh"}}
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
    
       <Marker longitude={-100} latitude={40} anchor="bottom" >
      <img src="./red_dot.png" />
      <div>This is a Marker</div>
      </Marker>
        </Map>

      
         
       
  
       
        </div>
      </div>
    </Router>
  </ApolloProvider>
);
}



      {/* <button className='button'>Login</button>
     <button className='button'>Register</button>
       <button className='button'>Logout</button> */}





export default App;
