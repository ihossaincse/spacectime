import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import styles from "../styles/MapBox.module.scss";

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
        <div className={styles.map_box}>
            <ReactMapGL {...viewport}
                mapStyle="mapbox://styles/fowl/ckzwz31l0001j15t22ujhbw8k"
                mapboxApiAccessToken={process.env.mapbox_key}
                onViewportChange={(viewport) => setViewport(viewport)}
            ></ReactMapGL>
        </div>
    )
}

export default MapBox
