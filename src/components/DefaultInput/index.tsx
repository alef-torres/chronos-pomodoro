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
            <input className={styles.input} type={type} id={id} {...rest} placeholder='Digite algo' disabled defaultValue='Valor' />
        </div>
    )
}
