import React from 'react'
import './input.css'
const Input = ({
    type,
    placeholder,
    value,
    onChange,
    errorMessage,
    customStyles,
    icon
}) => {
    return (
        <div className='inputWrapper' style={customStyles}>
            {icon && <span className='inputIcon'>{icon}</span>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`inputField ${errorMessage ? 'inputError' : ''}`}
            />
            {errorMessage && <span className='errorField'>{errorMessage}</span>}
        </div>
    )
}

export default Input
