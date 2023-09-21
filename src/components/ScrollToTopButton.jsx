import { FaAngleUp } from 'react-icons/fa';

export const ScrollToTopButton = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={handleScrollToTop}
            className="fixed bottom-4 right-2 p-2 z-50 bg-gray-500 text-xl text-center shadow-default"
        >
            <FaAngleUp />
        </button>
    );
};
