import React from 'react';
import { useState, useEffect, useRef } from 'react';
import {
    motion,
    useScroll,
    useTransform,
    useInView,
    useAnimation,
    useIsPresent,
} from 'framer-motion';

export const HomeAnimation = ({ children }) => {
    const targetRef = useRef(null);
    /* Framer motion initialization */
    const isInView = useInView(targetRef);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });

    const switchAnimation = useAnimation();
    const slideControl = useAnimation();
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        if (useInView) {
            switchAnimation.start('visible');
            slideControl.start('visible');
        }
    }, [useInView]);

    return (
        <motion.div
            ref={targetRef}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={switchAnimation}
            transition={{
                duration: 0.5,
                delay: 0.25,
            }}
        >
            {children}
        </motion.div>
    );
};
