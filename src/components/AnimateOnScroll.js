import React, {useRef, useState, useEffect} from 'react'
import ScrollReveal from 'scrollreveal'

const AnimateOnScroll = props => {
    const {
        children,
        className,
        AnimationDelay,
        AnimationDistance,
        AnimationDuration,
        AnimationEasing,
        AnimationInterval,
        AnimationOpacity,
        AnimationOrigin,
        AnimationScale,
        AnimationReset
    } = props

    const RevealElement = useRef(null)
    const [renderElement, setRenderElement] = useState(false)

    const RevealAnimation = () => {
        const sr = ScrollReveal({
            distance: AnimationDistance ? AnimationDistance : '0px',
            duration: AnimationDuration ? AnimationDuration : 1000,
            easing: AnimationEasing ? AnimationEasing : 'cubic-bezier(0.5, 0, 0, 1)',
            reset: AnimationReset ? AnimationReset : false
        })

        sr.reveal(RevealElement?.current, {
            delay: AnimationDelay ? AnimationDelay : 0,
            interval: AnimationInterval ? AnimationInterval : 300,
            opacity: AnimationOpacity ? AnimationOpacity : 0,
            origin: AnimationOrigin ? AnimationOrigin : 'bottom',
            scale: AnimationScale ? AnimationScale : 1,
            beforeReveal: renderReveal
        })
    }

    const renderReveal = () => {
        setRenderElement(!renderElement)
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            RevealAnimation()
        }
    }, [])


    return (
        <div ref={RevealElement} className={className}>
            <>{children}</>
        </div>
    )
}

export default AnimateOnScroll