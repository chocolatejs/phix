import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
// import { withViewport, configureViewport } from '@storybook/addon-viewport'

import '../src/App.css'
import PickIntegrationTypes from '../src/workflows/onboarding2/PickIntegrationTypes'

// addDecorator(withViewport('iphone6'))
// console.log(configureViewport)


storiesOf('Onboarding', module).add('PickIntegrationTypes',()=>{
        return (
            <div style = {{height: '100vh', width: '100vw'}}>
                <PickIntegrationTypes/>
            </div>
        )
    })
