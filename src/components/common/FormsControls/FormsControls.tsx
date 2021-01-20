import React from 'react';
import styles from "./FormsControls.module.css"


export const Textarea = ({ input, meta, ...props }: any) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <textarea {...input} {...props} />
            {hasError && <p>{meta.error}</p>}
        </div>
    )

}


export const Input = ({ input, meta, ...props }: any) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <input {...input} {...props} />
            {hasError && <p>{meta.error}</p>}
        </div>
    )

}