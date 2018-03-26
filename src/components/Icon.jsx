import React from 'react'
import styles from './Icon.module.css'

const iconlist = {
    //back: require('./assets/back.svg'),
    stethoscope: require('./assets/stethoscope.svg'),
    healthinsurance: require('./assets/healthinsurance.svg'),
    rx: require('./assets/rx.svg'),
    genetics: require('./assets/genetics.svg'),
    hsapig: require('./assets/hsapig.svg'),
    wearable: require('./assets/wearable.svg'),
    x: require('./assets/x.svg'),
    locationpin: require('./assets/locationpin.svg')
}

export const Icon = (props) => {
    return(
        <div 
            className = {[styles.icon, styles[props.size], props.className].join(' ')} 
            // style = {{backgroundImage: 'url("/components/assets/stethoscope.svg")'}}
            style = {{backgroundImage: `url(${iconlist[props.img]})`}}
            onClick = {props.onClick}
        /> 
    )
}
