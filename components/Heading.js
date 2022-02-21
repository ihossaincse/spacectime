import React from 'react';
import styles from "../styles/Heading.module.scss";

const Heading = ({ text }) => {
    return (
        <div>
            <h2 className={styles.heading}>{text}</h2>
        </div>
    )
}

export default Heading
