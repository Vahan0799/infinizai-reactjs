import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import Image from '../../../components/elements/Image'
import Esports from '../../../components/Esports'

import {CharacterPortrait} from '../../../data/Characters'

const Characters = () => {
    return(
        <section className="characters">
            <div className="characters__container">
                <div className="characters__single">
                    <Swiper
                        loop={true}
                        loopedSlides={10}
                        slidesPerView={1}
                        speed={1000}
                    >
                        {CharacterPortrait.map((elem, index) =>
                            <SwiperSlide key={index}>
                                <div className="characters__single--img">
                                    <Image src={elem.image} alt={elem.alt} height={512} width={263}/>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
                <div className="characters__description">
                    <Esports/>
                    <article>
                        <h3 className="h2">Customize Your <br/> Own Character</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Characters