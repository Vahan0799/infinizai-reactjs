import React from 'react';
import HeadMeta from '../components/HeadMeta';

const Empty = props => {
    const {
        title,
        description,
        image,
        children
    } = props;

    return (
        <>
            <HeadMeta title={title} description={description} image={image}/>
            <main>
                <div className="page-wrapper">
                    {children}
                </div>
            </main>
        </>
    );
};

export default Empty;