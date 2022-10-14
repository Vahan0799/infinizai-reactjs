import React from 'react'

import Underline from '../../components/elements/Underline'
import Image from '../../components/elements/Image'
import AnimateOnScroll from '../../components/AnimateOnScroll'

import SponsorData from '../../data/SponsorData'

const Sponsors = () => {
    return (
        <section className="sponsors">
            <div className="sponsors__description">
                <h2>Our <Underline color="blue">Sponsors</Underline></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non
					pulvinar neque.</p>
            </div>

            <div className="sponsors__list container">
                {SponsorData.map((item, index) => {
                    return (
                        <AnimateOnScroll key={index}
                            AnimationDistance={'50px'}
                            AnimationOrigin={item.origin}
                            AnimationEasing={'ease'}
                            className="sponsors__list--item"
                        >
                            <Image
                                src={item.logo}
                                alt={item.alt + '-icon'}
                                width={104}
                                height={35}
                            />
                        </AnimateOnScroll>
                    )
                })}
            </div>
        </section>
    )
}

export default Sponsors