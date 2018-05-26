import React from 'react';
import { storiesOf } from '@storybook/react';

import PickIntegrationTypes from '../src/workflows/onboarding2/PickIntegrationTypes'


storiesOf('PickIntegrationTypes', module).add('bs',()=>{
        return (
            <PickIntegrationTypes/>
        )
    })
