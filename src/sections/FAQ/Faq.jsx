'use client';
import { useState, useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { motion, useInView, useAnimation } from 'framer-motion';

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

    return (
        <motion.div
            initial="hidden"
            animate={switchAnimation}
            variants={faqAnimation}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-start relative mb-4 border-b"
            ref={targetRef}
            key={index}
            onClick={() => setOpen((open) => !open)}
        >
            <FaAngleDown
                className={`absolute top-0 right-0 transition-all duration-500 linear ${
                    open ? '-rotate-180' : 'rotate-0'
                }`}
            />
            <h4 className="pr-4 text-sm md:text-base">{title}</h4>
            <div
                className={`overflow-hidden transition-[max-height] duration-500 linear ${
                    open ? 'max-h-56' : 'max-h-0'
                }`}
            >
                <p className="pb-4">{content}</p>
            </div>
        </motion.div>
    );
}
