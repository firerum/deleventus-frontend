/* Mobile navigation variants */
export const ulVariants = {
    open: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

export const liVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {
                stiffness: 1000,
                velocity: -100,
            },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

/* Home Get started variants */
export const h2PAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        stiffness: 100,
        velocity: -100,
        transition: { duration: 0.6, delay: 0.5, ease: 'easeOut' },
    },
};

export const steps = {
    hidden: { opacity: 0, y: '100%' },
    visible: {
        opacity: 1,
        y: 0,
        stiffness: 100,
        velocity: -100,
        transition: { duration: 0.6, delay: 1, ease: 'easeOut' },
    },
};

export const faqPAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        stiffness: 100,
        velocity: -100,
        transition: { duration: 0.6, delay: 0.4, ease: 'easeOut' },
    },
};
