import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchContext = createContext('');

export const useSearchContext = () => useContext(SearchContext);

export const SearchContextProvider = ({ children }) => {
    const [search, setSearch] = useState('');

    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');

    // update search query
    useEffect(() => {
        if (typeof query === 'string' && query.length) {
            setSearch(query);
        }
    }, [query]);

    const value = useMemo(() => ({ search, setSearch }), [search]);

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};
