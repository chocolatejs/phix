
import React, { Component } from 'react';
import {observable, action, computed} from 'mobx'
import {observer} from 'mobx-react'

import {merge} from 'lodash'


import SelectAccounts from './workflows/onboarding/SelectAccounts'

import Header from './components/Header'
// import {List} from './components/List'

import './App.css'
import styles from './App.module.css';

/* basic onboarding: 
  1. tutorial
  2. login
  3. select accounts
  4. find account
  5. login to account
  6. fake 2FA
  7. lil loading screen
  8. if applicable, "do you want to add another?"
    repeat 4-6 for every account selected during step 3
  7. 
*/
class Store {

  @observable screen = 'iphone'

  @observable workflow = "onboarding"
    onboardingSteps = [
      'Tutorial',
      'Login',
      'SelectAccounts',
      'FindAccount'
    ]
  @observable step = 2

  @observable userName = ''
  @observable userZIP = null
  @action setZIP = (zip) => {this.userZIP = zip}

  @observable accountsToSync = []
    @computed get onboardingHeaderTitles(){
 
      let variableTitles = []
      const defaultTitles = ['Tutorial', 'Login', 'Bring your data together']
      // [Health Insurance, Pharmacy, Care Provider]
      const accountsAsTitles = {
        'Care Provider': 'Who\'s your care provider?', 
        'Health Insurance': 'What health insurance do you have?', 
        'Pharmacy': 'Which pharmacy do you go to?', 
        'Genetics': 'What genomics service do you use?',
        'Health Savings Account': 'Which HSA do you use?',
        'Wearable Devices': 'What wearable device do you want to add?',
      }

      this.accountsToSync.forEach((ele,i,arr)=>{
        variableTitles.push(accountsAsTitles[ele])
       })

      console.log(variableTitles)
      return merge(defaultTitles, variableTitles)
     }

  @observable syncedAccounts = []

  @action toggleAccountToSync = (acct) => {
    // console.log('selected', acct)
    if(this.accountsToSync.includes(acct)){
      this.accountsToSync.splice(this.accountsToSync.indexOf(acct),1)
    }
    else{
      this.accountsToSync.push(acct)
    }
  }
  @action goBack = () => {
    this.step--
  }
  @action advance = () => {
    this.step++
  }
}

const store = new Store()
window.store = store

@observer
class App extends Component {
  render() {
    //onboarding specific for nowv.....
    const step = store.onboardingSteps[store.step]
    return (
      <div 
        className={[
          "App", 
          styles[store.screen],
          styles[store[store.workflow+'Steps'][store.step]]
        ].join(' ')}
      >
        <Header
          display = {true}
          // title = {step==='SelectAccounts'? "Bring your data together" : 'Fuck you'}
          titles = {store.onboardingHeaderTitles}
          step = {store.step}
          backButton = {step==='FindAccount'? true : false}
        />
        {step === 'SelectAccounts' && 
          <SelectAccounts 
            onSelect = {store.toggleAccountToSync}
            selected = {store.accountsToSync}
            mode = "batch"
            setZIP = {store.setZIP}
            userZIP = {store.userZIP}
            advance = {store.advance}
          />
        }
        {//step === 'FindAccount' && 


        }
        
      </div>
    );
  }
}

export default App;
