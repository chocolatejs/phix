import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
    return(
        <div 
            className = {[
                styles.button, 
                props.className
            ].join(' ')} 
            onClick = {props.onClick}
        >
            {props.label}
        </div>
    )
}

export default Button