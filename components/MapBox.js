import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const MapBox = ({ lat=40.6976701, long=-74.2598737, h="400px" }) => {
    const [selectedLocation, setSelectedLocation] = useState({});
    const [viewport, setViewport] = useState({
        width: "100%",
        height: h,
        latitude: lat,
        longitude: long,
        zoom: 8
    });

    return (
        <div>
            <ReactMapGL {...viewport}
                mapStyle="mapbox://styles/ihossainworkbd/ckzwt40s6000414pb15v5h7yq"
                mapboxApiAccessToken={process.env.mapbox_key}
                onViewportChange={(viewport) => setViewport(viewport)}
            ></ReactMapGL>
        </div>
    )
}

export default MapBox
