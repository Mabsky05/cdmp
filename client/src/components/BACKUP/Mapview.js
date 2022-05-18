import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql, ApolloClient } from '@apollo/client';
import "../index.css"
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

import { useState, useEffect } from 'react';
import { Map, Popup, Marker } from 'react-map-gl';

import marker_icon from '../red_dot.png';

function Mapview() {

  function Mapselect() {
    if (Auth.loggedIn()) {
      return (
        <Map className=''
        initialViewState={{
          longitude: Auth.getProfile().data.long,
          latitude: Auth.getProfile().data.lat,
          zoom: 18
        }}
        style={{
          width: "100vw", 
          height: "100vh", 
            }
        } 
        mapStyle="mapbox://styles/mabsky05/cl38shcoy000314qprx0v9acj"
        mapboxAccessToken = {'pk.eyJ1IjoibWFic2t5MDUiLCJhIjoiY2wzMWRsbXhoMDk4bTNjcW4wY3Jyb3c2YiJ9.p_wf3CHUlYeePBCasVWubA'}
      >
        <Marker 
        longitude={Auth.getProfile().data.long} 
        latitude={Auth.getProfile().data.lat} 
        anchor="bottom" 
        >
        <img className="marker_icon flash" src={marker_icon} alt="marker" />
        </Marker>
      </Map>
      );
    } else {
      return (
        <Map className=''
        initialViewState={{
          longitude: 151.21,
          latitude: -33.87,
          zoom: 18
        }}
        style={{
          width: "100vw", 
          height: "100vh", 
            }
        }
        mapStyle="mapbox://styles/mabsky05/cl38shcoy000314qprx0v9acj"
        mapboxAccessToken = {'pk.eyJ1IjoibWFic2t5MDUiLCJhIjoiY2wzMWRsbXhoMDk4bTNjcW4wY3Jyb3c2YiJ9.p_wf3CHUlYeePBCasVWubA'}
      >
        <Marker 
        longitude={151.21} 
        latitude={-33.87} 
        anchor="bottom" 
        >
        <img className="marker_icon flash" src={marker_icon} alt="marker" />
        </Marker>
      </Map>
      );
    }
  }

  return Mapselect()
}







export default Mapview;

// Auth.getProfile().data.lat