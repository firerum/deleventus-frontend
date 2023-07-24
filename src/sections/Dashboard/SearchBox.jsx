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
                onChange={() => console.log('clicked')}
            />
        </div>
    );
};
