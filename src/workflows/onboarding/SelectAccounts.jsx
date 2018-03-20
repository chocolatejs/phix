import React from 'react'
import styles from './SelectAccounts.module.css'

import {List} from '../../components/List'
import {Icon} from '../../components/Icon'

const typelist = require('./accountTypeList.js').syncableAccountTypes

export default class SelectAccounts extends React.Component{

    render(){
        //transform typelist blobs into visual format
        const computedList = typelist.map((item)=>{return(
            <div className = {styles.accountTypeItem}>
                <Icon img = {item.icon} size = "large" />
                <div className = {styles.text}>
                    <div className = {styles.title}> {item.title} </div>
                    <div className = {styles.examples}> (i.e. {item.examples.join(', ')}) </div>
                </div>
            </div>
        )})
        return(
            <List
                options = {computedList}
            />
        )
    }

}