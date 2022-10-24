import { getCenter } from 'geolib';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';

const MapView = ({ searchResults }) => {
    const [selectLocation, setSelectLocation] = useState({});

    const cordinates = searchResults?.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    const center = getCenter(cordinates);
    const [viewport, setViewPort] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 9,
    });

    return (
        <Map
            mapStyle="mapbox://styles/tonioreign/cl9m7en8o000314mmc6xucknq"
            mapboxAccessToken={process.env.mapbox_key}
            initialViewState={{ ...viewport }}
        >
            {searchResults?.map((res) => (
                <div key={res.long}>
                    <Marker
                        longitude={res.long}
                        latitude={res.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p
                            role="img"
                            onClick={() => setSelectLocation(res)}
                            className="cursor-pointer text-2xl animate-bounce"
                            aria-label="push-pin"
                        >
                            📍
                        </p>
                    </Marker>

                    {selectLocation.long == res.long ? (
                        <Popup
                            onClose={() => setSelectLocation({})}
                            closeOnClick={true}
                            latitude={res.lat}
                            longitude={res.long}
                        >
                            {res.title}
                        </Popup>
                    ) : (
                        false
                    )}
                </div>
            ))}
        </Map>
    );
};

export default MapView;
