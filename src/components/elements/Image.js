import React from 'react'

const Image = props => {
    const {
        src,
        className,
        alt,
        width,
        height
    } = props

    return (
        <>
            <img
                src={src} alt={alt} width={width} height={height} className={className}
                loading={'lazy'}
            />
        </>
    )
}

export default Image