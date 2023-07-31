'use client';
import React from 'react';

export const Button = ({ className, children, title, onClick }) => {
    return (
        <button title={title} className={className} onClick={onClick}>
            {children}
        </button>
    );
};
