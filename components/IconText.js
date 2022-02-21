import Image from 'next/image';
import React from 'react';
import styles from "../styles/IconText.module.scss";

const IconText = ({ iconImage, title, subText }) => {
    return (
        <div className={styles.icon_text}>
            <div className={styles.icon}>
                <Image src={iconImage} alt="icon" width="45" height="45" />    
            </div>  
            <div className="">
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.sub_title}>{subText}</p>
            </div>  
        </div>
    )
}

export default IconText
