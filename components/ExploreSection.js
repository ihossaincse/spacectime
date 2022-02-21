import React from 'react';
import styles from "../styles/ExploreSection.module.scss";
import Heading from './Heading';
import MapTextBox from './MapTextBox';

const ExploreSection = () => {
    return (
        <div className="container">
            <Heading text="explore" />
            <div className={styles.explore_section}>
                <MapTextBox />
                <MapTextBox />
                <MapTextBox />
                <MapTextBox />
                <MapTextBox />
                <MapTextBox />
                <MapTextBox />
                <MapTextBox />
            </div>
        </div>
    )
}

export default ExploreSection
