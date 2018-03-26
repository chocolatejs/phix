import React from 'react'
import {observer} from 'mobx-react'
import styles from './SelectAccounts.module.css'

import FlipMove from 'react-flip-move'

import {List} from '../../components/List'
import {Icon} from '../../components/Icon'
import Button from '../../components/Button'

const typelist = require('./accountTypeList.js').syncableAccountTypes

/* 2 modes to selectaccounts: 
    1. 'batch': select more than one, then go with button and bottom. only for onboarding
        1.5: 'batch zip check': selected accts change styles, zip check modal
    2. 'normal': picking one just takes you straight to that...
*/

@observer
export default class SelectAccounts extends React.Component{

    render(){
        //transform typelist blobs into visual format
        const computedList = typelist.map((item)=>{
            const selected = this.props.selected.includes(item.title)
            const index = this.props.selected.indexOf(item.title)
            const selectedPrefix = index===0? 'First, we\'ll ' : index===1? "Next, we\'ll " : index===this.props.selected.length-1? 'Lastly, we\'ll ' : 'Then let\'s' 
            return(
                <React.Fragment> 
                <Icon 
                    img = "x" 
                    size = "small" 
                    className = {styles.x}
                    onClick = {(selected? ()=>this.props.onSelect(item.title) : ()=>{})}
                />
                <div className = {[styles.accountTypeItem, selected? styles.selected: ''].join(' ')}
                    onClick = {()=>this.props.onSelect(item.title)}
                >
                    <Icon img = {item.icon} size = "large" className = {styles.icon} />
                    <div className = {styles.text}>
                        <FlipMove
                            duration = {300}
                            disableAllAnimations = {true}
                            enterAnimation = {!selected? {
                                from: {transform: 'translateY(55px)', opacity: 0},
                                to: {transform: 'translateY(0px)', opacity: 2}
                            }: {
                                from: {transform: 'translateY(-55px)', opacity: 0},
                                to: {transform: 'translateY(0px)', opacity: 2}
                            }}
                            leaveAnimation = {!selected? {
                                from: {transform: 'translateY(0px)', opacity: 1},
                                to: {transform: 'translateY(-55px)', opacity: -1}
                            } : {
                                from: {transform: 'translateY(0px)', opacity: 1},
                                to: {transform: 'translateY(55px)', opacity: -1}
                            }}
                        >
                        {!selected &&
                            <div>
                                <div className = {styles.title}> {item.title} </div>
                                <div className = {styles.examples}> (i.e. {item.examples.join(', ')}) </div>
                            </div>
                        }
                        {selected && 
                            <div className = {styles.selectedText}>
                                {selectedPrefix} login to your 
                                <div className = {styles.title}> {item.title}. </div>
                            </div>
                        }
                        </FlipMove>
                    </div>
                </div>
                </React.Fragment>
            )}
        )

        const syncButtonLabel = this.props.selected.length===1? 'Sync ' + this.props.selected[0] : 'Sync ' + this.props.selected.length + ' Accounts'

        return(
            <div className = {styles.selectAccounts}>
                <List
                    className = {styles.accountTypeList}
                    options = {computedList}
                />
                <div className = {styles.bottomButtonWrapper}>
                    <FlipMove 
                        className = {styles.btnFlipMove}
                        duration = {250}
                        enterAnimation = {!this.props.selected.length===0? {
                            from: {transform: 'translateY(65px)', opacity: 0},
                            to: {transform: 'translateY(0px)', opacity: 2}
                        }: {
                            from: {transform: 'translateY(65px)', opacity: 0},
                            to: {transform: 'translateY(0px)', opacity: 2}
                        }}
                        leaveAnimation = {!this.props.selected.length===0? {
                            from: {transform: 'translateY(0px)', opacity: 1},
                            to: {transform: 'translateY(-65px)', opacity: -1}
                        } : {
                            from: {transform: 'translateY(0px)', opacity: 1},
                            to: {transform: 'translateY(65px)', opacity: -1}
                        }}

                    >
                    {this.props.selected.length >= 1 &&
                        <div className = {styles.startBatchSyncButton}>
                            <Button className = {styles.btn} label = {syncButtonLabel} onClick = {()=>{console.log('anoteh')}} />
                        </div>
                    }
                    </FlipMove>
                </div>
            </div>
        )
    }

}