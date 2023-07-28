'use client';
import React from 'react';

export const Button = ({ className, children }) => {
    return (
        <button className={className} onClick={() => console.log('clicked')}>
            {children}
        </button>
    );
};
