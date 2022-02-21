import Image from 'next/image';
import React from 'react';
import styles from "../styles/IconText.module.scss";

const IconText = ({ iconImage, title, subText }) => {
    return (
        <div className={styles.icon_text}>
            <div className={styles.icon}>
                <Image src={iconImage} alt="icon" width="35" height="35" />    
            </div>  
            <div className="">
                <div className={styles.title}>{title}</div>
                <div className={styles.sub_title}>{subText}</div>
            </div>  
        </div>
    )
}

export default IconText
