
import React from 'react'
import styles from './List.module.css'

export const List = (props) => {
    return(
        <ul className = {[styles.list, props.className].join(' ')}>
            {props.options.map((option,i)=>(
                <li 
                    className = {styles.option}
                    key = {'listoption'+i}
                > 
                    {option} 
                </li>
            ))}
        </ul>
    )
}