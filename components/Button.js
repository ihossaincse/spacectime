import Link from 'next/link'
import React from 'react'
import styles from "../styles/Button.module.scss"

const Button = ({ text="button", url="#" }) => {
    return (
        <div className={styles.button}>
            <Link href={url}>
                <a>
                    {text}
                </a>
            </Link>
        </div>
    )
}

export default Button
