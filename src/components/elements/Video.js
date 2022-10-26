import React from 'react'

const Video =  React.forwardRef((props, ref) => {
    const {
        src,
        type,
        fallBackSrc,
        fallBackType,
        ...rest
    } = props

    return (
        <video {...rest} playsInline ref={ref}>
            {fallBackSrc && fallBackType &&
				<source src={fallBackSrc} type={`video/${fallBackType}`}/>
            }
            <source src={src} type={`video/${type}`}/>
        </video>
    )
})

export default Video