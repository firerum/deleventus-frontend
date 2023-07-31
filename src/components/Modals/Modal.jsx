'use client';
import { useEffect } from 'react';
import { Button } from '@components/Button';
import { ReactPortal } from './ReactPortal';

export const Modal = ({ children, isOpen, handleClose }) => {
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
                <Button onClick={handleClose} className="close-btn">
                    Close
                </Button>
                <div className="modal-content">{children}</div>
            </div>
        </ReactPortal>
    );
};
