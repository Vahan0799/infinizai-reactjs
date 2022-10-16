import React from 'react'

import DefaultLayout from '../../layouts/Default'

import Hero from './components/Hero'
import Sponsors from './components/Sponsors'
import GamingNeeds from './components/GamingNeeds'
import CloudGaming from './components/CloudGaming'

const Index = () => {
    return (
        <DefaultLayout title="Home">
            <Hero/>
            <Sponsors/>
            <GamingNeeds/>
            <CloudGaming/>
        </DefaultLayout>
    )
}

export default Index