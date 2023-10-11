import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css'



export function Button (props) {
    console.log(props)
    return (
        <button type={props.type}>
            <span>{props.text}</span>
        </button>
    );
}