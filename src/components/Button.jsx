import React from 'react'
import styles from './Button.module.css'

import {Icon} from './Icon.jsx'

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

export const CircleButton = (props) => {
    return(
        <div 
            className = {[
                styles.circleButton,
                props.className
            ].join(' ')}
            onClick = {props.onClick}
        >
            <Icon img = {props.img} size = "medium" />
        </div>
    )
}

export default Button