import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Index from '../pages'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Index/>} exact/>
            </Routes>
        </>
    )
}
export default Routing