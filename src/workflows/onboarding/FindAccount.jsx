import React from 'react'
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'

import {ButtonGroup} from '../../components/Button'
import styles from './FindAccounts.module.css'

@observer
export default class FindAccount extends React.Component{
	@observable filteringBy = ''
	@action filterListByType = (type) => this.filteringBy = type
	render(){
		return (
			<div className = {styles.findAccount}>
				<div className = {styles.filter}>
				<ButtonGroup
					options = {[
						{name: 'Networks', onClick: ()=>{this.filterListByType('network')}},
						{name: 'Hospitals', onClick: ()=>{this.filterListByType('hospital')}},
						{name: 'Doctors', onClick: ()=>{this.filterListByType('doctor')}},
					]}
					optionClass = {styles.filterOption}
				/>
				</div>
				<div className = {styles.list}>

				</div>
			</div>	
		)
	}
}