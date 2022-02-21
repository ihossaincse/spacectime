import Image from 'next/image';
import React from 'react';
import styles from "../styles/MapTextBox.module.scss";
import MapBox from './MapBox';

const MapTextBox = ({url, address, imageIcon, name}) => {
    return (
        <div className={styles.map_text_box}>
            <MapBox h="150px" />
            <div className={styles.text}>
                <div className={styles.top}>
                    <h4 className="">{url}</h4>
                    <p className="">{address}</p>
                </div>
                <div className={styles.bottom}>
                    <Image src={imageIcon} alt="icon" width="50px" height="50px" />
                    <p className=""><strong>{name}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default MapTextBox
