import React from 'react'
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'

import {ButtonGroup} from '../../components/Button'
import styles from './FindAccount.module.css'

// import syncableAccountTypes from './workflows/onboarding'
import {List} from '../../components/List'
import {Icon} from '../../components/Icon'
import { careProviders, insurers } from './careProviders.js'

const mockEntryLists = {
    'Care Provider': careProviders,
    'Health Insurance': insurers
}

@observer
export default class FindAccount extends React.Component{
    @observable step = 0
    @observable filteringBy = 'network'
    @action filterListByType = (type) => {
        console.log('filtering by ', type)
        this.filteringBy = type
    }
    render(){
        console.log(this.props.accts[this.step])
        const {filteringBy} = this

        const computedEntryList = mockEntryLists[this.props.accts[this.step]]
            .filter((entry)=>{
                //flawed but care providers is the only filterable option for now
                if(this.props.accts[this.step]==='Care Provider') return entry.type===this.filteringBy
                else return entry
            })
            .map((entry)=>{
            //filter?
            return(
               <div 
                overridekey = {entry.name}
                className = {styles.entry}>
                    {filteringBy === 'network' &&
                        <Icon img = {entry.logo} size = "large" className = {styles.icon} />
                    }
                    {entry.name}
                    

               </div> 
            )
        })

        return (
            <div className = {styles.findAccount}>
                <ButtonGroup
                    toggle
                    options = {[
                        {name: 'Networks', onClick: ()=>{this.filterListByType('network')}, active: filteringBy === 'network'},
                        {name: 'Hospitals', onClick: ()=>{this.filterListByType('hospital')}, active: filteringBy === 'hospital'},
                        {name: 'Doctors', onClick: ()=>{this.filterListByType('doctor')}, active: filteringBy === 'doctor'},
                    ]}
                    optionClass = {styles.filterOption}
                />
                <div className = {styles.list}>
                    <List
                        animate
                        // animate = {false}
                        options = {computedEntryList}
                    />
                </div>
            </div>  
        )
    }
}