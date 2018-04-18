import React from 'react'
import styles from './Header.module.css'
import {Icon} from './Icon' 

import FlipMove from 'react-flip-move'


export default class Header extends React.Component{
  
    componentWillReceiveNewProps(newProps){

    }

  render(){
      const {backButton, title, titles, step} = this.props
      return(
        <div className = {styles.header}>



          <div className = {[styles.titleWrapper, backButton? styles.offset : ''].join(' ')}>
            <div className = {[styles.backButton, backButton? styles.visible : ''].join(' ')}>
              <Icon img = "chevleft" size = "small" />
            </div>
            {titles.map((t,i)=>{
              return(
                <div 
                  key = {'header-title-'+t} 
                  className = {[
                    styles.title,
                    i===step? styles.visible:
                      i>step? styles.inFuture:
                      styles.inPast
                  ].join(' ')}
                > 
                  {t}
                </div>
              )
            })}

          </div>
        </div>
      )
    }
}