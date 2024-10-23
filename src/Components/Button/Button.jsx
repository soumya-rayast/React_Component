import React from 'react'
import './Button.css'
const Button = (
    {
        label,
        onClick,
        variant,
        customsStyles,
        customClass,
        icon,
        loading
    }
) => {
    return (
        <div>
            <button
                className={`btn ${variant} ${customClass}`}
                style={customsStyles}
                onClick={onClick}
                disabled={loading}>
                {
                    loading ? (
                        <span className='spinner'></span>
                    ) : (
                        icon && <span className='icon'>{icon}</span>
                    )
                }
                {label}
            </button>
        </div>
    )
}

export default Button
