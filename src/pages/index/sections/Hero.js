import React, {useState, useEffect} from 'react';
import Underline from '../../../components/Underline';
import LinkElem from '../../../components/elements/Link';
import Image from '../../../components/elements/Image';
import Observe from '../../../components/Observe';
import Esports from '../../../components/Esports';
import HeroImage from '../../../assets/images/hero-img.png';

const Hero = () => {
    const [loadSidebar, setLoadSidebar] = useState(false);

    useEffect(() => {
        setLoadSidebar(true);
    },[]);

    return(
        <section className="hero">
            <div className="hero__container">
                <div className="hero__left">
                    <aside className={`hero__social${loadSidebar ? ' in-view': ''}`}>
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
                            <LinkElem to="#." type="solid-secondary" data-color="#57B8FF">Explore More</LinkElem>
                            <LinkElem to="#." type="primary">View our team</LinkElem>
                        </div>
                    </div>
                </div>
                <div className="hero__right">
                    <Observe className="hero__img">
                        <Image
                            src={HeroImage}
                            width={660}
                            height={518}
                            alt={'hero-png'}
                        />
                    </Observe>
                </div>
            </div>
        </section>
    );
};

export default Hero;