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
            <FaAngleDown className="absolute right-0 " />
            <h4 className="pr-4 text-sm md:text-base">{title}</h4>
            {open && <p className="pb-4">{content}</p>}
        </div>
    );
}
