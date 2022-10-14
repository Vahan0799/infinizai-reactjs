import React from 'react'

import DefaultLayout from '../../layouts/Default'

import Hero from './Hero'
import Sponsors from './Sponsors'
import GamingNeeds from './GamingNeeds'

const Index = () => {
    return (
        <DefaultLayout title="Home">
            <Hero/>
            <Sponsors/>
            <GamingNeeds/>
        </DefaultLayout>
    )
}

export default Index