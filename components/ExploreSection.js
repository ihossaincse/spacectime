import React from 'react';
import mapData from "../data/map";
import styles from "../styles/ExploreSection.module.scss";
import Heading from './Heading';
import MapTextBox from './MapTextBox';

const ExploreSection = () => {
    return (
        <div className="container">
            <Heading text="explore" />
            <div className={styles.explore_section}>
                {mapData?.map(({url, address, imageIcon, name}) => (
                    <MapTextBox url={url} address={address} imageIcon={imageIcon} name={name} key={Math.random()} />
                ))}
            </div>
        </div>
    )
}

export default ExploreSection
