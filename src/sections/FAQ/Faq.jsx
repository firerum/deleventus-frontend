'use client';
import { useState, useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Button } from '@components/Button';

export default function Faq({ title, content, index }) {
    const [open, setOpen] = useState(false);
    const targetRef = useRef(null);
    const isInView = useInView(targetRef);
    const switchAnimation = useAnimation();

    const faqAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    if (isInView) {
        switchAnimation.start('visible');
    }

    const toggleOpen = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <motion.div
            initial="hidden"
            animate={switchAnimation}
            variants={faqAnimation}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-start relative mb-4 border-b"
            ref={targetRef}
            key={index}
        >
            <button
                className="w-full block"
                onClick={toggleOpen}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleOpen();
                    }
                }}
                aria-expanded={open}
                aria-controls={`faq-content-${index}`}
                tabIndex={0}
                role="button"
            >
                <h4 className="pr-4 text-sm text-left md:text-base">{title}</h4>
                <FaAngleDown
                    className={`absolute top-0 right-0 transition-all duration-500 linear ${
                        open ? '-rotate-180' : 'rotate-0'
                    }`}
                />
            </button>
            <div
                id={`faq-content-${index}`}
                role="region"
                aria-hidden={!open}
                className={`overflow-hidden transition-[max-height] duration-500 linear ${
                    open ? 'max-h-56' : 'max-h-0'
                }`}
            >
                <p className="pb-4">{content}</p>
            </div>
        </motion.div>
    );
}
