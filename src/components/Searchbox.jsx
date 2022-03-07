import React, { useEffect, useState } from 'react';
import { useSearchContext } from '../contexts/SearchContext';

const Searchbox = ({ className = '', callBack = () => {} }) => {
    const [query, setQuery] = useState('');
    const { search, setSearch } = useSearchContext();

    useEffect(() => {
        if (typeof search === 'string' && typeof query === 'string' && search !== query) {
            setQuery(search);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (typeof query === 'string' && query.trim().length) {
            setSearch(query.trim());
            callBack(query);
        }
    };

    return (
        <form className={`searchbox ${className}`} onSubmit={handleSubmit}>
            <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="search here..."
                className="searchbox_field "
            />
            <button type="submit" className="searchbox_btn ">
                <i className="bi bi-search" />
            </button>
        </form>
    );
};

export default Searchbox;
