import React from 'react'

import Image from './elements/Image'

import Icon from '../assets/svg/fire-icon.svg'

const Esports = () => {
    return(
        <div className="esports-section">
            <Image
                src={Icon}
                alt="fire-icon"
                width={'32'}
                height={'32'}
            />
            <p>FUTURE OS ESPORTS</p>
        </div>
    )
}

export default Esports