import styles from './styles.module.css'
import React from 'react'

type DefaultInput = {
    id: string;
    labelText?: string;
} & React.ComponentProps<'input'>

export function DefaultInput({ type, labelText, id, ...rest }: DefaultInput) {
    return (
        <div className={styles.container}>
            <label htmlFor={id}>{labelText}</label>
            <input type={type} id={id} {...rest} />
        </div>
    )
}
