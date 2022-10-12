import React from 'react'

const Image = React.forwardRef((props, ref) => {
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
                ref={ref}
                src={src} alt={alt} width={width} height={height} className={className}
                loading={'lazy'}
            />
        </>
    )
})

export default Image