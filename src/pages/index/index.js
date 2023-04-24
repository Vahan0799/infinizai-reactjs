import React from 'react';
import DefaultLayout from '../../layouts/Default';
import Hero from './sections/Hero';
import Sponsors from './sections/Sponsors';
import GamingNeeds from './sections/GamingNeeds';
import CloudGaming from './sections/CloudGaming';
import Characters from './sections/Characters';
import Categories from './sections/Categories';
import News from './sections/News';

const Index = () => {
    return (
        <DefaultLayout title="Home" description="GAMING SITE">
            <Hero/>
            <Sponsors/>
            <GamingNeeds/>
            <CloudGaming/>
            <Characters/>
            <Categories/>
            <News/>
        </DefaultLayout>
    );
};

export default Index;