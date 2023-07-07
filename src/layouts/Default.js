import React from 'react';
import Lenis from '@studio-freight/lenis';

import HeadMeta from '../components/HeadMeta';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DefaultLayout = props => {
    const {
        title,
        description,
        image,
        children
    } = props;

    const lenis = new Lenis({
        duration: 1.5,
        lerp: 0.9
    });

    const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return (
        <>
            <HeadMeta title={title} description={description} image={image}/>
            <main>
                <Header/>
                <div className="page-wrapper">
                    {children}
                </div>
                <Footer/>
            </main>
        </>
    );
};

export default DefaultLayout;