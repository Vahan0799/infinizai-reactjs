import React from 'react'
import Underline from '../../../components/Underline'
import Image from '../../../components/elements/Image'
import Observe from '../../../components/Observe'
import SponsorData from '../../../data/SponsorData'

const Sponsors = () => {
    return (
        <section className="sponsors">
            <div className="sponsors__description">
                <h2>Our <Underline color="blue">Sponsors</Underline></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non
					pulvinar neque.</p>
            </div>

            <Observe className="sponsors__list container">
                {SponsorData.map((item, index) => {
                    return (
                        <div key={index}
                            className="sponsors__list--item"
                        >
                            <Image
                                src={item.logo}
                                alt={item.alt + '-icon'}
                                width={104}
                                height={35}
                            />
                        </div>
                    )
                })}
            </Observe>
        </section>
    )
}

export default Sponsors