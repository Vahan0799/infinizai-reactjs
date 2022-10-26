import React from 'react'

import DefaultLayout from '../../layouts/Default'

import Hero from './components/Hero'
import Sponsors from './components/Sponsors'
import GamingNeeds from './components/GamingNeeds'
import CloudGaming from './components/CloudGaming'
import Characters from './components/Characters'

const Index = () => {
    return (
        <DefaultLayout title="Home" description="GAMING SITE">
            <Hero/>
            <Sponsors/>
            <GamingNeeds/>
            <CloudGaming/>
            <Characters/>
        </DefaultLayout>
    )
}

export default Index