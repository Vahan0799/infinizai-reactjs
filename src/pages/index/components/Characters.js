import React, {useState} from 'react'
import {Controller, Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

import Image from '../../../components/elements/Image'
import Esports from '../../../components/Esports'
import AnimateOnScroll from '../../../components/AnimateOnScroll'

import {CharacterPortrait, CharacterDescription} from '../../../data/Characters'

const Characters = () => {
    const [controlledSwiper, setControlledSwiper] = useState(null)
    const [controlledSwiper2, setControlledSwiper2] = useState(null)

    const firstSlider = {
        modules: [Controller],
        slidesPerView: 1,
        loop: true,
        loopedSlides: 10,
        speed: 1000,
        allowTouchMove: false,
        controller: {
            control: controlledSwiper
        }
    }

    const secondSlider = {
        modules: [Controller, Navigation],
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        speed: 1000,
        navigation: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        controller: {
            control: controlledSwiper2
        }
    }

    return(
        <section className="characters">
            <div className="characters__container">
                <div className="characters__single">
                    <AnimateOnScroll
                        AnimationOrigin="left"
                        AnimationDistance={'80px'}
                        AnimationDelay={300}
                        AnimationEasing={'ease'}
                    >
                        <Swiper
                            {...firstSlider}
                            onSwiper={setControlledSwiper2}
                        >
                            {CharacterPortrait.map((elem, index) =>
                                <SwiperSlide key={index}>
                                    <div className="characters__single--img">
                                        <Image src={elem.image} alt={elem.alt} height={512} width={263}/>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </AnimateOnScroll>
                </div>
                <AnimateOnScroll
                    AnimationOrigin="right"
                    AnimationDistance={'80px'}
                    AnimationDelay={300}
                    AnimationEasing={'ease'}
                >
                    <div className="characters__description">
                        <Esports/>
                        <article>
                            <h3 className="h2">Customize Your <br/> Own Character</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
                        </article>
                        <Swiper
                            {...secondSlider}
                            onSwiper={setControlledSwiper}
                        >
                            {CharacterDescription.map((el, key) =>
                                <SwiperSlide key={key}>
                                    <div className="characters__description--item">
                                        <Image src={el.image} alt={el.alt}/>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    )
}

export default Characters