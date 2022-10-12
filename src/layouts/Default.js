import React from 'react'
import {Helmet} from 'react-helmet'

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
                <div className="page-wrapper">
                    {children}
                </div>
            </main>
        </>
    )
}

export default DefaultLayout