import React from 'react';
import {Helmet} from 'react-helmet';

const HeadMeta = props => {
    const {
        title,
        description,
        image
    } = props;

    return (
        <Helmet>
            <meta data-hid="title" name="title" content={`Infinizai | ${title}`} />
            <meta data-hid="description" name="description" content={description} />
            <meta data-hid="og:type" property="og:type" content="website" />
            <meta data-hid="og:title" property="og:title" content={`Infinizai | ${title}`} />
            <meta data-hid="og:description" property="og:description" content={description} />
            <meta data-hid="og:image" property="og:image" content={image} />
            <meta data-hid="twitter:card" property="twitter:card" content="summary_large_image" />
            <meta data-hid="twitter:title" property="twitter:title" content={`Infinizai | ${title}`} />
            <meta data-hid="twitter:description" property="twitter:description" content={description} />
            <meta data-hid="twitter:image" property="twitter:image" content={image} />
            <title>Infinizai | {title}</title>
        </Helmet>
    );
};

export default HeadMeta;