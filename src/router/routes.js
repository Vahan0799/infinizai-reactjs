import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Fitness from '../pages/fitness'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Fitness/>} exact/>
            </Routes>
        </>
    )
}
export default Routing