import React from 'react'
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'

import {ButtonGroup} from '../../components/Button'
import styles from './FindAccount.module.css'

@observer
export default class FindAccount extends React.Component{
    @observable filteringBy = 'network'
    @action filterListByType = (type) => {
        console.log('filtering by ', type)
        this.filteringBy = type
    }
    render(){
        const {filteringBy} = this
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

                </div>
            </div>  
        )
    }
}