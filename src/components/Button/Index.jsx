import styles from './Button.module.css'

export function Button (props){
    console.log(props)
    return (
        <button>
            <span>{props.text}</span>
        </button>
    );
}