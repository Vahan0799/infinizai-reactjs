import React from 'react'

import DefaultLayout from '../layouts/Default'

import Header from '../components/Header'
import Hero from '../components/pages/home/Hero'
import Footer from '../components/Footer'

const Index = () => {
    return (
        <DefaultLayout title="Home">
            <Header/>
            <Hero/>
            <Footer/>
        </DefaultLayout>
    )
}

export default Index