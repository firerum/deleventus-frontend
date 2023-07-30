'use client';
import React from 'react';

export const Button = ({ className, children, title }) => {
    return (
        <button
            title={title}
            className={className}
            onClick={() => console.log('clicked')}
        >
            {children}
        </button>
    );
};
