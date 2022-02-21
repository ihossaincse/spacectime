import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = ({searchResults}) => {
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        longitude: -100,
        latitude: 40,
        zoom: 11
    });

    return (
        <ReactMapGL {...viewport}
            mapStyle="mapbox://styles/ihossainworkbd/ckx4ui1uu085x14nkvwokprqk"
            mapboxApiAccessToken={process.env.mapbox_key}
            onViewportChange={(viewport) => setViewport(viewport)}
        >
        </ReactMapGL>
    )
}

export default Map
