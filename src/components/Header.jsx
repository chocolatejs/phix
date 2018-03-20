import React from 'react'
import styles from './Header.module.css'

export const Header = (props) => {
  return(
    <div className = {styles.header}>
      {props.backButton && 
        <div className = {styles.backButton}>

        </div>
      }
      {props.title}
      
    </div>
  )
}