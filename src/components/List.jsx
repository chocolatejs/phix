
import React from 'react'
import styles from './List.module.css'

import FlipMove from 'react-flip-move'

export const List = (props) => {
    return(
        <ul className = {[styles.list, props.className].join(' ')}>
            <FlipMove
                duration = {300}
                // staggerDelayBy = {25}
                staggerDurationBy = {40}
                disableAllAnimations = {!props.animate}
                leaveAnimation = {{
                    from: {transform: 'translateX(0px)', opacity: 1},
                    to: {transform: 'translateX(-100px)', opacity: 0}
                }}
            >
                {props.options.map((option,i)=>(
                    <li 
                        className = {[styles.option, props.optionClass].join(' ')}
                        key = {option.props.overridekey || 'listoption'+i}
                    > 
                        {option} 
                    </li>
                ))}
            </FlipMove>
        </ul>
    )
}