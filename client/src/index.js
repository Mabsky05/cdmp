import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = 'pk.eyJ1IjoibWFic2t5MDUiLCJhIjoiY2wzMWRsbXhoMDk4bTNjcW4wY3Jyb3c2YiJ9.p_wf3CHUlYeePBCasVWubA';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
