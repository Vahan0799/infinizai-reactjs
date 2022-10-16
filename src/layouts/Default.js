import React from 'react'
import {Helmet} from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

const DefaultLayout = props => {
    const {
        title,
        children
    } = props

    return (
        <>
            <Helmet>
                <title>Infinizai | {title}</title>
            </Helmet>
            <main>
                <Header/>
                <div className="page-wrapper">
                    {children}
                </div>
                <Footer/>
            </main>
        </>
    )
}

export default DefaultLayout