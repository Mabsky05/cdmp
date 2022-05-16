import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  useQuery
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css"


import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Header from './components/Header';

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

  const [showPopup, setShowPopup] = useState(true);
  const [markers, setMarkers] = useState([])

  // const myStorage = window.localStorage;
  // const [currentUsername, setCurrentUsername] = useState(myStorage.getItem("user"));
  // const [pins, setPins] = useState([]);
  // const [currentPlaceId, setCurrentPlaceId] = useState(null);
  // const [newPlace, setNewPlace] = useState(null);
  // const [title, setTitle] = useState(null);
  // const [desc, setDesc] = useState(null);
  // const [star, setStar] = useState(0);
  // const [viewport, setViewport] = useState({
  //   latitude: 47.040182,
  //   longitude: 17.071727,
  //   zoom: 4,
  // });
  // const [showRegister, setShowRegister] = useState(false);
  // const [showLogin, setShowLogin] = useState(false);

  // const handleMarkerClick = (id, lat, long) => {
  //   setCurrentPlaceId(id);
  //   setViewport({ ...viewport, latitude: lat, longitude: long });
  // };

  // const handleAddClick = (e) => {
  //   const [longitude, latitude] = e.lngLat;
  //   setNewPlace({
  //     lat: latitude,
  //     long: longitude,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newPin = {
  //     username: currentUsername,
  //     title,
  //     desc,
  //     rating: star,
  //     lat: newPlace.lat,
  //     long: newPlace.long,
  //   };

  //KEY CODE
  //   try {
  //     const res = await axios.post("/pins", newPin);
  //     setPins([...pins, res.data]);
  //     setNewPlace(null);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  
  //KEY CODE
  // useEffect(() => {
  //   const getPins = async () => {
  //     try {
  //       const allPins = await axios.get("/pins");
  //       setPins(allPins.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getPins();
  // }, []);

  // const handleLogout = () => {
  //   setCurrentUsername(null);
  //   myStorage.removeItem("user");
  // };





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
            </Routes>
      <Map
        initialViewState={{
          longitude: 151.21,
          latitude: -33.87,
          zoom: 18
        }}
        style={{
          width: "100vw", 
          height: "100vh", 
        }}
        mapStyle="mapbox://styles/mabsky05/cl37g0j6c001n14o7pejwzy9n"
        mapboxAccessToken = {'pk.eyJ1IjoibWFic2t5MDUiLCJhIjoiY2wzMWRsbXhoMDk4bTNjcW4wY3Jyb3c2YiJ9.p_wf3CHUlYeePBCasVWubA'}
      >
        <Marker 
        longitude={151.21} 
        latitude={-33.87} anchor="bottom" >
        <img className="marker_icon flash" src={marker_icon} alt="marker" />
        </Marker>
        {showPopup && (
        <Popup className="popup" longitude={151.21} latitude={-33.87}
          anchor="top"
          onClose={() => setShowPopup(false)}>
            <div className='place_title'>Title</div><br></br>
            <div className='desc'>Description</div>
            <div className='rating'>Rating</div>
            <div className='timestamp'>Time Stamp</div>
        </Popup>)}
      </Map>
      </Router>
    </ApolloProvider>
  );
}

export default App;
