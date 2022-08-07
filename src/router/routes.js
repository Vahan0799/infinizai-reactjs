import {Routes, Route} from 'react-router-dom'

import Mirage from '../pages/mirage'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Mirage/>} exact/>
            </Routes>
        </>
    )
}
export default Routing