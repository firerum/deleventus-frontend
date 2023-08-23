import { motion } from 'framer-motion';

export const VerticalCarousel = ({ children, currentIndex }) => {
    return (
        <div className="carousel-container">
            <motion.div
                className="carousel-slide"
                key={currentIndex}
                custom={currentIndex}
                initial={{ y: 500 }}
                animate={{ y: 0 }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 24,
                    duration: 1,
                }}
            >
                {children[currentIndex]}
            </motion.div>
        </div>
    );
};
