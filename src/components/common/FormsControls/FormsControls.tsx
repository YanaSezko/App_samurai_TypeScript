import React from 'react';
import { Field } from 'redux-form';
import styles from "./FormsControls.module.css"

const FormControl = ({ input, meta, children, ...props }: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>{children}</div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props: any) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}>
        <input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder: any, name: string, validators: any, component: any, props = {}, text = "") => {
    return <div>
        <Field placeholder={placeholder}
            name={name}
            validators={validators}
            component={component}
            {...props}
        />{text}
    </div>
}