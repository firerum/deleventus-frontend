'use client';
import { useEffect, useRef } from 'react';
import { Button } from '@components/Button';
import { ReactPortal } from './ReactPortal';
import { FaTimes } from 'react-icons/fa';
import { useCloseElementOnClick } from '@utils/useCloseElementOnClick';

export const Modal = ({ children, isOpen, handleClose }) => {
    const ref = useRef(null);
    // close modal when clicked outside of it
    useCloseElementOnClick(ref, () => handleClose());

    // enable escape key to close the modal for accessibility
    useEffect(() => {
        const closeModalOnEscapeKey = (e) =>
            e.key === 'Escape' ? handleClose() : null;
        document.body.addEventListener('keydown', closeModalOnEscapeKey);
        // clean up the event listener
        return () => {
            document.body.removeEventListener('keydown', closeModalOnEscapeKey);
        };
    }, [handleClose]);

    // remove modal from DOM if it is not open
    if (!isOpen) return null;

    return (
        <ReactPortal wrapperId="modal-container">
            <div className="modal">
                <div className="modal-content" ref={ref}>
                    <Button
                        onClick={handleClose}
                        className="bg-white shadow-lg p-1 absolute top-0 right-0"
                    >
                        <FaTimes />
                    </Button>
                    {children}
                </div>
            </div>
        </ReactPortal>
    );
};
