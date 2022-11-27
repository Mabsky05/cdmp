import React from 'react';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import "../index.css"
import Auth from '../utils/auth';
import { Map, Marker } from 'react-map-gl';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.css';

// require('dotenv').config();

const mapboxAccessToken = process.env.REACT_APP_MAPBOX_TOKEN;
console.log(mapboxAccessToken)
console.log(process.env.REACT_APP_MAPBOX_TOKEN)

function Mapview() {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
  function Mapselect() {
    if (Auth.loggedIn()) {
      return (
        <Map className=''
        initialViewState={{
          longitude: Auth.getProfile().data.longitude,
          latitude: Auth.getProfile().data.latitude,
          zoom: 18,
          
        }}
        style={{
          width: "100vw", 
          height: "100vh", 
            }
        }
        mapStyle="mapbox://styles/mabsky05/cl38shcoy000314qprx0v9acj"
        mapboxAccessToken = "pk.eyJ1IjoibWFic2t5MDUiLCJhIjoiY2wzMWRsbXhoMDk4bTNjcW4wY3Jyb3c2YiJ9.p_wf3CHUlYeePBCasVWubA"

      >
        <Marker 
        longitude={Auth.getProfile().data.longitude} 
        latitude={Auth.getProfile().data.latitude} 
        anchor="bottom"        
        >
        <PersonPinIcon className="PPI" style={{ color: 'red' }} fontSize = "large"/>
        </Marker>
      </Map>
      );
    } else {
      return (
        <Map className=''
        initialViewState={{
          longitude: 144.9625,
          latitude: -37.8177,
          zoom: 18
        }}
        style={{
          width: "100vw", 
          height: "90vh", 
            }
        }
        mapStyle="mapbox://styles/mabsky05/cl38shcoy000314qprx0v9acj"
        mapboxAccessToken = "pk.eyJ1IjoibWFic2t5MDUiLCJhIjoiY2wzMWRsbXhoMDk4bTNjcW4wY3Jyb3c2YiJ9.p_wf3CHUlYeePBCasVWubA"

      >

        <Marker 
        longitude={144.9625} 
        latitude={-37.8177} 
        anchor="bottom"  
        >
        <PersonPinIcon className="PPI" style={{ color: 'red' }} fontSize = "large"/>
        </Marker>
      </Map>
      );
    }
  }
  return Mapselect()
  
}

export default Mapview;
