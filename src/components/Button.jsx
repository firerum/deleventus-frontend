import React from 'react';

export const Button = ({ title }) => {
    return (
        <button type="button" className="bg-btn-color rounded-md px-2 py-3">
            {title}
        </button>
    );
};
