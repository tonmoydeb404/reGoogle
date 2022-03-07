import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ResultSearch from '../components/Results/ResultSearch';
import SearchSekeleton from '../components/skeletons/SearchSekeleton';
import useSearch from '../hooks/useSearch';

const Search = () => {
    const [searchParams] = useSearchParams();

    const query = searchParams.get('q');
    const { searchData, searchError } = useSearch(query || false);

    if (searchError && !searchData) {
        return 'there is an error';
    }

    return (
        <div className="result_text-container">
            {searchData.results ? (
                searchData.results.map((result) => (
                    <ResultSearch
                        key={result.link + result.title}
                        domain={result.cite.domain}
                        link={result.link}
                        title={result.title}
                        description={result.description}
                    />
                ))
            ) : (
                <SearchSekeleton num={10} />
            )}
        </div>
    );
};

export default Search;
