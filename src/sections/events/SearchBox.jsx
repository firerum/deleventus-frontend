'use client';
import { useState } from 'react';
import { MdSearch } from 'react-icons/md';

export const SearchBox = ({ className, placeholder }) => {
    const [query, setQuery] = useState('');

    return (
        <div className="relative">
            <input
                type="search"
                value={query}
                name="search"
                placeholder={placeholder}
                onChange={(e) => setQuery(e.target.value)}
                className={className}
            />
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
                <MdSearch />
            </span>
        </div>
    );
};
