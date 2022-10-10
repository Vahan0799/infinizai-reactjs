import React, {useState, useRef, useEffect} from 'react'

const Observe = props => {
    const [intercepted, setIntercepted] = useState(false)
    const el = useRef(null)
    useEffect(() => {
        observeSections()
    }, [])

    const observeSections = () => {
        const threshold = props.threshold || 0.01
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio > threshold) {
                    setIntercepted(true)
                    if (props.onChange) props.onChange(true)
                } else {
                    setIntercepted(false)
                    if (props.onChange) props.onChange(false)
                }
            },
            {
                root: null,
                rootMargin: props.rootMargin || '0px',
                threshold
            }
        )

        observer.observe(el.current)
    }

    const classNames = () => {
        return `work-spacing ${
            intercepted ? 'intercepted ' + `${props.activeClassName ? props.activeClassName : ''}` : ''
        } ${props.className ? props.className : ''}`
    }

    const children = () => {
        if (props.showHide) {
            if (intercepted) {
                return props.children
            } else {
                return null
            }
        } else {
            return props.children
        }
    }

    return (
        <div id={props.id} ref={el} className={classNames()}>
            {children()}
        </div>
    )
}

export default Observe
