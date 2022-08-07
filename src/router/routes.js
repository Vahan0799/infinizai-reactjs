import {Routes, Route} from 'react-router-dom'

import MagicSlab from '../pages/magic-slab'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<MagicSlab/>} exact/>
            </Routes>
        </>
    )
}
export default Routing