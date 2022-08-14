import React, {useState, useEffect} from 'react'

const Input = props => {
    const {
        label,
        className,
        labelClass,
        inputClass,
        id,
        type,
        placeholder,
        value,
        onChange,
        autocomplete,
        name,
        ...rest
    } = props

    const [stateValue, setStateValue] = useState(value)

    useEffect(() => {
        if (onChange) {
            onChange({ target: { name, value: stateValue } })
        }
    }, [stateValue])

    useEffect(() => {
        if (stateValue !== value) {
            setStateValue(value)
        }
    }, [value])

    const changeHandler = (e) =>{
        setStateValue(e.target.value)
    }

    return(
        <div className={`input--wrapper${className}`}>
            <input
                id={id}
                type={type}
                className={inputClass ? inputClass : ''}
                placeholder={placeholder}
                name={name}
                onChange={changeHandler}
                autoComplete={autocomplete}
                {...rest}
            />
            {label && (
                <label
                    htmlFor={id}
                    className={labelClass ? labelClass : ''}
                >
                    {label}
                </label>
            )}
        </div>
    )
}

export default Input