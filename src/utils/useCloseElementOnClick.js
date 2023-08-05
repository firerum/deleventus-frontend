'use client';
import { useEffect } from 'react';

export const useCloseElementOnClick = (ref, onClickOutside) => {
    return useEffect(() => {
        /**
         * Invoke Function onClick outside of element
         */
        function handleClickOutside(event) {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside();
            }
        }
        // attach event listener to the body
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // cleanup event listener
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, onClickOutside]);
};
