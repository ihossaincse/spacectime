import React from 'react';
import styles from "../styles/InfoBox.module.scss";
import IconText from './IconText';

const InfoBox = () => {
    return (
        <div className="container">
            <div className={styles.info_box}>
                <IconText iconImage="/images/icon_nft.svg" title="NFT" subText="750,265" />
                <IconText iconImage="/images/icon_idep.svg" title="IDEP spent" subText="6.5 mm" />
                <IconText iconImage="/images/icon_nftAuc.svg" title="NFT acuctions" subText="910" />
                <IconText iconImage="/images/icon_price.svg" title="current price" subText="2.15 USD" />
            </div>
        </div>
    )
}

export default InfoBox
