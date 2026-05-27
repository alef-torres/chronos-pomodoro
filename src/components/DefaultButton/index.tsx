import styles from './styles.module.css'
import React from 'react'

type DefaultButton = {
    icon: React.ReactNode;
    color?: 'green' | 'red';
} & React.ComponentProps<'button'>

export function DefaultButton({color, icon, ...rest}: DefaultButton) {
    return (
        <div className={styles.container}>
            <button className={`${styles.button} ${color ? styles[color] : ''}`} {...rest}>
                {icon}
            </button>
        </div>
    )
}
