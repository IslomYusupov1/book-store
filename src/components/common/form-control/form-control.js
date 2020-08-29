import React from 'react';
import styles from './form-control-modul.css'

export const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;

    return(
        <div className={styles.formControl + "" + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span style={{color: 'red', borderColor: 'red'}}>{meta.error}</span>}
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl>
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
        return <FormControl {...props}> <input id="input_field" {...input} {...restProps}/> </FormControl>
    };
