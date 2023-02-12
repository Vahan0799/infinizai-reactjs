import React from 'react';
import Image from '../../../components/elements/Image';
import Observe from '../../../components/Observe';
import CategoryData from '../../../data/CategoryData';

const Categories = () => {
    return (
        <section className="categories">
            <Observe className="categories__container" threshold={0.5}>
                {CategoryData.map((item, index) => {
                    return (
                        <div key={index} className="categories__item">
                            <figure>
                                <Image
                                    src={item.image}
                                    alt={item.caption}
                                    className="object-cover"
                                />
                                <figcaption className="categories__item--description">
                                    <Image
                                        src={item.icon}
                                        alt={item.caption + ' Icon'}
                                        width={128}
                                        height={128}
                                    />
                                    <span>{item.caption}</span>
                                </figcaption>
                            </figure>
                        </div>
                    );
                })}
            </Observe>
        </section>
    );
};

export default Categories;