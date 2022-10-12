import React, {useEffect, useRef} from 'react'
import {gsap} from 'gsap/all'

import Underline from '../../elements/Underline'
import LinkElem from '../../elements/Link'
import Image from '../../elements/Image'

import Esports from '../../Esports'

import HeroImage from '../../../assets/images/hero-img.png'

const Hero = () => {
    const socialElements = useRef(null)
    const heroImage = useRef(null)

    const revealAnimations = () => {
        // Social links sidebar
        gsap.to(socialElements?.current, {
            left: 4,
            ease: 'Power4.EaseOut'
        }).timeScale(0.5)

        // Hero image reveal
        gsap.fromTo(heroImage?.current, {
            opacity: 0,
            scale: 0.2,
            ease: 'Power4.EaseInOut'
        }, {
            opacity: 1,
            scale: 1
        }).delay(0.4).timeScale(0.5)
    }

    useEffect(() => {
        revealAnimations()
    },[])

    return(
        <section className="hero">
            <div className="hero__container">
                <div className="hero__left">
                    <aside className="hero__social" ref={socialElements}>
                        <div className="hero__social--container">
                            <LinkElem to="#." type="secondary">Facebook</LinkElem>
                            <LinkElem to="#." type="secondary">Instagram</LinkElem>
                            <LinkElem to="#." type="secondary">Twitch</LinkElem>
                        </div>
                    </aside>
                    <div className="hero__description">
                        <Esports />
                        <h1>Unleash the Next <Underline color="yellow">Generation</Underline> of Gaming</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>
                        <div className="hero__description--buttons">
                            <LinkElem to="#." type="solid-secondary" color="#57B8FF">Explore More</LinkElem>
                            <LinkElem to="#." type="primary">View our team</LinkElem>
                        </div>
                    </div>
                </div>
                <div className="hero__right">
                    <div className="hero__img"  ref={heroImage}>
                        <Image
                            src={HeroImage}
                            width={'660'}
                            height={'518'}
                            alt={'hero-png'}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero