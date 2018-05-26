import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
// import { withViewport, configureViewport } from '@storybook/addon-viewport'

import PickIntegrationTypes from '../src/workflows/onboarding2/PickIntegrationTypes'

// addDecorator(withViewport('iphone6'))
// console.log(configureViewport)


storiesOf('Onboarding', module).add('PickIntegrationTypes',()=>{
        return (
            <div>
                <PickIntegrationTypes/>
            </div>
        )
    })
