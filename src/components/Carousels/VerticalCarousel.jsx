import { motion } from 'framer-motion';

export const VerticalCarousel = ({ children, currentIndex }) => {
    return (
        <div className="carousel-container">
            <motion.div>
                <motion.div
                    className="carousel-slide"
                    key={currentIndex}
                    custom={currentIndex}
                    initial={{ y: 80 }}
                    animate={{ y: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        duration: 2,
                    }}
                >
                    {children[currentIndex]}
                </motion.div>
            </motion.div>
        </div>
    );
};
