import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState } from 'react';
import Map from 'react-map-gl';

const MapView = () => {
    const [viewPort, setViewPort] = useState({
        width: '100%',
        height: '100%',
        latitude: 37.75,
        longitude: -122.45,
        zoom: 9,
    });

    return (
        <Map
            mapStyle="mapbox://styles/tonioreign/cl9m7en8o000314mmc6xucknq"
            mapboxAccessToken={process.env.mapbox_key}
            {...viewPort}
        ></Map>
    );
};

export default MapView;
