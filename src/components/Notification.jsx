import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MdOutlineErrorOutline,
    MdOutlineCheckCircleOutline,
} from 'react-icons/md';
import { ReactPortal } from './Modals/ReactPortal';

export const Notification = ({ message, type, duration }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    return (
        <ReactPortal wrapperId="notification-container">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3 }}
                        className={`fixed top-2 right-2 p-4 py-default text-white rounded-md shadow-premium ${
                            type === 'success' ? 'bg-green-500' : 'bg-red-500'
                        }`}
                    >
                        <div className="flex gap-2 items-center">
                            <span className="order-2">{message}</span>
                            <span>
                                {type === 'success' ? (
                                    <MdOutlineCheckCircleOutline />
                                ) : (
                                    <MdOutlineErrorOutline />
                                )}
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </ReactPortal>
    );
};
