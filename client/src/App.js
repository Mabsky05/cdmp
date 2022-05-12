import { useState, useEffect } from 'react';
import { Map, ReactMapGL, Popup, Marker } from 'react-map-gl';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import axios from 'axios';


function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [marker, setMarkers] = useState([])

  useEffect(() => {
    const getMarkers = async () => {
      try {
        const res = await axios.get('./markers');
        setMarkers(res.data);
      } catch(err) {
        console.log(err)
      }
}})

  return ( 
    <Map
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 14
      }}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken = {'pk.eyJ1IjoibWFic2t5MDUiLCJhIjoiY2wzMWRsbXhoMDk4bTNjcW4wY3Jyb3c2YiJ9.p_wf3CHUlYeePBCasVWubA'}
    >

    

      } )
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
    
  );
}

export default App;
