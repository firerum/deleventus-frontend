'use client';
import { createPortal } from 'react-dom';
import { useState, useLayoutEffect } from 'react';

// simple function to create an element in the DOM
function createContainerAndAppendToBody(wrapperId) {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', wrapperId);
    document.body.appendChild(wrapper);
    return wrapper;
}

// react portal expects the container/wrapper id to be in existence
export const ReactPortal = ({
    children,
    wrapperId = 'react-portal-wrapper',
}) => {
    const [wrapperElement, setWrapperElement] = useState(null);

    // useLayoutEffect is used because I am directly mutating the DOM and the modal effect needs to be synchronous
    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let createdElement = false;
        // if element with wrapperId does not exist
        // create one and append to body
        if (!element) {
            createdElement = true;
            element = createContainerAndAppendToBody(wrapperId);
        }
        setWrapperElement(element);

        // get rid of the dynamically created container/wrapper element
        return () => {
            // remove the programatically created element
            if (createdElement && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
    }, [wrapperId]);

    // wrapperElement state will be null on the very first render.
    if (wrapperElement === null) return null;

    return createPortal(children, wrapperElement);
};
