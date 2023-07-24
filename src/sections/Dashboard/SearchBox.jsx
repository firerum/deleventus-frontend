import { useState } from 'react';

export const SearchBox = () => {
    const [query, setQuery] = useState('');

    return (
        <div>
            <input
                type="search"
                value={query}
                name="search"
                placeholder="search by keyword e.g event"
                onChange={(e) => setQuery(e.target.value)}
                className='bg-pry-purple px-4 py-2 rounded-sm'
            />
        </div>
    );
};
