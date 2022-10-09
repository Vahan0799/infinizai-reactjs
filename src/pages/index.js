import React from 'react'
import {Helmet} from 'react-helmet'

import Header from '../components/Header'
import Hero from '../components/pages/home/Hero'
import Footer from '../components/Footer'

const Index = () => {
    return (
        <>
            <Helmet>
                <title>Infinizai | Home</title>
            </Helmet>
            <main>
                <div className="page-wrapper">
                    <Header/>
                    <Hero/>
                    <Footer/>
                </div>
            </main>
        </>
    )
}

export default Index