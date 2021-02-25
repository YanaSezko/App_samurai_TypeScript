import React from 'react';
import styles from "./FormsControls.module.css"


export const Textarea = ({ input, meta:{touched,error}, ...props }: any) => {

    const hasError = touched && error

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <textarea {...input} {...props} />
            {hasError && <p>{error}</p>}
        </div>
    )

}


export const Input = ({ input, meta:{touched,error}, ...props }: any) => {

    const hasError = touched && error

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <input {...input} {...props} />
            {hasError && <p>{error}</p>}
        </div>
    )

}