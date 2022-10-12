import React from 'react'

const Button = props => {
    const {
        children,
        className,
        design,
        ...rest
    } = props

    const classNames = () => {
        return `btn btn-${design} ${className || ''}`
    }

    return (
        <button className={classNames()}
            {...rest}
        >
            {design === 'solid-primary' || design === 'solid-secondary' ? (
                <>
                    <span>{children}</span>
                    {design === 'solid-primary' &&
                        <>
                            <i></i>
                            <i></i>
                        </>
                    }
                </>
            ) : (
                <>
                    {children}
                </>
            )}
        </button>
    )
}

export default Button