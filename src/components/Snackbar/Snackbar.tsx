import React, { useEffect } from 'react'
import './Snackbar.scss'

function Snackbar(props: { message: string, isOpen: boolean, onClose: Function }) {
    const { message, isOpen, onClose } = props

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    return (
        <div className="proceeds-snackbar">
            <div className='snackbarContent'>
                <span>{message}</span>
            </div>
        </div>
    )
}

export default Snackbar
