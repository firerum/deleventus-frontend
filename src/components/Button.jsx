'use client';
import React from 'react';

export const Button = ({
    className,
    children,
    title,
    disabled = false,
    onClick,
}) => {
    return (
        <button
            title={title}
            disabled={disabled}
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
