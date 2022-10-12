import React from 'react'
import {Link} from 'react-router-dom'

const LinkElem = props => {
    const {
        type,
        children,
        ...rest
    } = props

    const classNames = () => {
        return `link${type ? ` link-${type}` : ''}`
    }

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