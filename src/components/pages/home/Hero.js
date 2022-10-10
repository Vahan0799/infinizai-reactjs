import React from 'react'

import Underline from '../../elements/Underline'
import Esports from '../../Esports'

const Hero = () => {
    return(
        <section className="hero">
            <div className="hero__container">
                <div className="hero__left">
                    <div className="hero__description">
                        <Esports />
                        <h1>Unleash the Next <Underline color="yellow">Generation</Underline> of Gaming</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>
                    </div>
                </div>
                <div className="hero__right"></div>
            </div>
        </section>
    )
}

export default Hero