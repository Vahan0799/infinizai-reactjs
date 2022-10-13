import React from 'react'

import DefaultLayout from '../../layouts/Default'

import Hero from './Hero'
import Sponsors from './Sponsors'

const Index = () => {
    return (
        <DefaultLayout title="Home">
            <Hero/>
            <Sponsors/>
        </DefaultLayout>
    )
}

export default Index