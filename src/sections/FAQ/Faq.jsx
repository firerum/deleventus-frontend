'use client';
import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

export default function Faq({ title, content, index }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="text-start relative mb-4 border-b"
            key={index}
            onClick={() => setOpen((open) => !open)}
        >
            <FaAngleDown
                className={`absolute top-0 right-0 transition-all duration-500 linear ${
                    open ? '-rotate-180' : 'rotate-0'
                }`}
            />
            <h4 className="pr-4 text-sm md:text-base">{title}</h4>
            <div
                className={`overflow-hidden transition-[max-height] duration-500 linear ${
                    open ? 'max-h-56' : 'max-h-0'
                }`}
            >
                <p className="pb-4">{content}</p>
            </div>
        </div>
    );
}
