import Image from 'next/image';
import React from 'react';
import styles from "../styles/Footer.module.scss";

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.icon_text}>
            <Image src="/images/icon_mail.svg" alt="icon_mail" width="20px" height="20px" />
            <p className="">info@idep.network</p>
          </div>
          <div className={styles.icon_text}>
            <Image src="/images/icon_docs.svg" alt="icon_docs" width="20px" height="20px" />
            <p className="">docs</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer
