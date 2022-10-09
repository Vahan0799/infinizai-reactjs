import React from 'react'

const Button = React.forwardRef((props, ref) => {
    const {
        children,
        className,
        design,
        ...rest
    } = props

    const classNames = () => {
        return `btn btn-${design} ${className || ''}`
    }

    return(
        <button className={classNames()}
            ref={ref}
            {...rest}
        >
            {children}
        </button>
    )
})

export default Button