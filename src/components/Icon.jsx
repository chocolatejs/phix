import React from 'react'
import styles from './Icon.module.css'

const iconlist = {
    //back: require('./assets/back.svg'),
    stethoscope: require('./assets/stethoscope.svg'),
    healthinsurance: require('./assets/healthinsurance.svg'),
    rx: require('./assets/rx.svg'),
    genetics: require('./assets/genetics.svg'),
    hsapig: require('./assets/hsapig.svg'),
    wearable: require('./assets/wearable.svg')
}



export const Icon = (props) => {
    console.log(iconlist.stethoscope)
    return(
        <div 
            className = {[styles.icon, styles[props.size]].join(' ')} 
            // style = {{backgroundImage: 'url("/components/assets/stethoscope.svg")'}}
            style = {{backgroundImage: `url(${iconlist[props.img]})`}}
        /> 
    )
}
