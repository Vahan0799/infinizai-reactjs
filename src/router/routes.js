import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Index from '../pages'
import NotFound from '../pages/NotFound'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Index/>} exact/>
                <Route path='*' element={<NotFound/>} exact/>
            </Routes>
        </>
    )
}
export default Routing