'use client';
import { useEffect, useRef } from 'react';
import { Button } from '@components/Button';
import { ReactPortal } from './ReactPortal';
import { FaTimes } from 'react-icons/fa';
import { useCloseElementOnClick } from '@utils/useCloseElementOnClick';
import { motion, AnimatePresence } from 'framer-motion';

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

    return (
        <AnimatePresence>
            {isOpen ? (
                <ReactPortal wrapperId="modal-container">
                    <div className="modal" role="aria-modal" aria-modal="true">
                        <motion.div
                            className="modal-content"
                            ref={ref}
                            initial={{ y: '-100%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: '-100%', opacity: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 24,
                            }}
                        >
                            <Button
                                onClick={handleClose}
                                className="bg-white shadow-lg p-1 absolute top-0 right-0"
                            >
                                <FaTimes />
                            </Button>
                            {children}
                        </motion.div>
                    </div>
                </ReactPortal>
            ) : null}
        </AnimatePresence>
    );
};
