
import React, { Component } from 'react';
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'


import SelectAccounts from './workflows/onboarding/SelectAccounts'

import {Header} from './components/Header'
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

  @observable accountsToSync = []
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
}

const store = new Store()
window.store = store

@observer
class App extends Component {
  render() {
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
          title = "Bring your data together"
        />
        <SelectAccounts 
          onSelect = {store.toggleAccountToSync}
          selected = {store.accountsToSync}
          mode = "batch"
        />
        
      </div>
    );
  }
}

export default App;
