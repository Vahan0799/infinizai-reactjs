import React from 'react'
import {LazyLoadImage, trackWindowScroll} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Image = ({images, scrollPosition}) => {
    return (
        <div>
            {images.map((image) =>
                <LazyLoadImage
                    src={image.src}
                    wrapperClassName={'react-image-wrapper'}
                    key={image.key}
                    alt={image.alt}
                    effect="blur"
                    height={image.height}
                    width={image.width}
                    scrollPosition={scrollPosition}
                />
            )}
        </div>
    )
}

export default trackWindowScroll(Image)