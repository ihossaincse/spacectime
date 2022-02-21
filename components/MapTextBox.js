import Image from 'next/image';
import React from 'react';
import styles from "../styles/MapTextBox.module.scss";
import MapBox from './MapBox';

const MapTextBox = () => {
    return (
        <div className={styles.map_text_box}>
            <MapBox h="150px" />
            <div className={styles.text}>
                <div className={styles.top}>
                    <h4 className="">magazine.flavor.lapse</h4>
                    <p className="">NYC, downtown</p>
                </div>
                <div className={styles.bottom}>
                    <Image src="/images/icon_idep.svg" alt="icon" width="50px" height="50px" />
                    <p className=""><strong>81</strong> IDEP</p>
                </div>
            </div>
        </div>
    )
}

export default MapTextBox
