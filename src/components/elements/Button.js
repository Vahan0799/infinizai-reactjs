import React, {useEffect} from 'react'

const Button = props => {
    const {
        children,
        className,
        design,
        color,
        ...rest
    } = props

    const setButtonProperties = () => {
        if (color) {
            document.querySelectorAll('.btn').forEach((elem) => {
                elem.setAttribute('style', `--color:${color}`)
            })
        }
    }

    const classNames = () => {
        return `btn btn-${design} ${className || ''}`
    }

    useEffect(() => {
        setButtonProperties()
    },[])

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