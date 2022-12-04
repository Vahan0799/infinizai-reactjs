import React from 'react'

import HeadMeta from '../components/HeadMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const DefaultLayout = props => {
    const {
        title,
        description,
        image,
        children
    } = props

    return (
        <>
            <HeadMeta title={title} description={description} image={image}/>
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