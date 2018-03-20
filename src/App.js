
import React, { Component } from 'react';
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'

import {Header} from './components/Header'
import {List} from './components/List'

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
const onboardingSteps = [
  'Tutorial',
  'Login',
  'SelectAccounts',
  'FindAccount'
]
class Store {

  @observable screen = 'iphone'

  @observable workflow = "onboarding"
  @observable step = 0
  @observable accountsToSync = []
  @observable syncedAccounts = []
}

const store = new Store()
window.store = store

class App extends Component {
  render() {
    return (
      <div className={["App", styles[store.screen]].join(' ')}>
        <Header
          display = {true}
          title = "Bring your data together"
        />
        <List
          options = {[

          ]}
        />
        
      </div>
    );
  }
}

export default App;
