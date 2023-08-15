'use client';
import { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export const CreateAccountCard = ({
    title,
    step,
    content,
    setCount,
    index,
    count,
}) => {
    const targetRef = useRef(null);
    const isInView = useInView(targetRef);
    const switchAnimation = useAnimation();

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    if (isInView) {
        switchAnimation.start('visible');
    }

    return (
        <motion.button
            ref={targetRef}
            initial="hidden"
            animate={switchAnimation}
            variants={variants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`bg-pry-purple text-left cursor-pointer py-8 px-6 rounded-xl max-w-md ${
                count === index && 'get-started-image-bg animate-account'
            }`}
            onClick={() => setCount(index)}
        >
            <span className="block font-general mb-4">{step}</span>
            <span className="block font-semibold mb-6">{title}</span>
            <span className="hidden md:block text-sm text-pry-text-color-1">
                {content}
            </span>
        </motion.button>
    );
};
