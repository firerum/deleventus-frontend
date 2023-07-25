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
            <span className="text-xl absolute top-[13px] left-0 px-6">
                <MdSearch />
            </span>
        </div>
    );
};
