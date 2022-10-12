import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

const LinkElem = props => {
    const {
        type,
        color,
        children,
        ...rest
    } = props

    const setLinkProperties = () => {
        if (color) {
            document.querySelectorAll('.link').forEach((el) => {
                el.setAttribute('style', `--color:${color}`)
            })
        }
    }

    const classNames = () => {
        return `link${type ? ` link-${type}` : ''}`
    }

    useEffect(() => {
        setLinkProperties()
    },[])

    return (
        <Link className={classNames()} {...rest}>
            {type === 'solid-secondary' ? (
                <span>{children}</span>
            ) : (
                <>
                    {children}
                </>
            )}
        </Link>
    )
}

export default LinkElem