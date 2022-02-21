import Image from 'next/image'
import React from 'react'
import styles from "../styles/Header.module.scss"
import Button from './Button'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.left}>spacectime</div>
                <div className={styles.middle}>
                    <div className={styles.logo}>
                        <Image src="/images/logo.svg" alt="logo" width="200" height="200" />
                    </div>
                </div>
                <div className={styles.right}>
                    <Button text="login" url="/" />
                </div>
            </div>
        </div>
    )
}

export default Header
