'use client';
import { useRef } from 'react';

export const TabSwipe = ({
    children,
    tabs,
    setTab,
    swipedTabIndex,
    setSwipedTabIndex,
}) => {
    const tabContainerRef = useRef(null);
    const touchStartXRef = useRef(null);

    const handleSwipe = async (direction) => {
        if (direction === 'left') {
            setSwipedTabIndex((prevIndex) =>
                Math.min(prevIndex + 1, tabs.length - 1)
            );
        } else if (direction === 'right') {
            setSwipedTabIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }
        setTab(tabs[swipedTabIndex]);
    };

    const calculateTabWidth = () => {
        if (tabContainerRef.current) {
            const tabElement = tabContainerRef.current.querySelector('li');
            if (tabElement) {
                return tabElement.getBoundingClientRect().width;
            }
        }
        return 0;
    };
    const tabWidth = calculateTabWidth();

    return (
        <div
            ref={tabContainerRef}
            onTouchStart={(e) => {
                touchStartXRef.current = e.touches[0].clientX;
            }}
            onTouchMove={(e) => {
                if (touchStartXRef.current !== null) {
                    const touchCurrentX = e.touches[0].clientX;
                    const distance = touchCurrentX - touchStartXRef.current;
                    if (Math.abs(distance) > tabWidth / 2) {
                        handleSwipe(distance > 0 ? 'right' : 'left');
                        touchStartXRef.current = null; // Reset touchStartX
                    }
                }
            }}
            onTouchEnd={() => {
                touchStartXRef.current = null; // Reset touchStartX on touch end
            }}
        >
            {children}
        </div>
    );
};
