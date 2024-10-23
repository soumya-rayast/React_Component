import React, { useEffect } from 'react'
import './Toast.css'
const Toast = ({
    message,
    type,
    onClose,
    duration
}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration || 300)
        return () => clearTimeout(timer);
    }, [duration, onClose])
    return (
        <div className={`toast ${type}`}>
            {message}
            <button className='toastClass' onClick={onClose}>X</button>
        </div>
    )
}

export default Toast
