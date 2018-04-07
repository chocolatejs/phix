import React from 'react'
import styles from './Header.module.css'
import {Icon} from './Icon' 

import FlipMove from 'react-flip-move'


export default class Header extends React.Component{
  
    componentWillReceiveNewProps(newProps){

    }

  render(){
        const {backButton, title} = this.props
      return(
        <div className = {styles.header}>

        <div className = {[styles.backButton, backButton? styles.visible : ''].join(' ')}>
            <Icon img = "chevleft" size = "small" />
        </div>
          
          <FlipMove typeName = {null}>
            <div 
                className = {[styles.title, backButton? styles.offsetForBackBtn : ''].join(' ')} 
                key = {title}
            > 
                {title} 
            </div>
          </FlipMove>

        </div>
      )
    }
}