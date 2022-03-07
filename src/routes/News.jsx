import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ResultNews from '../components/Results/ResultNews';
import NewsSkeleton from '../components/skeletons/NewsSkeleton';
import useNews from '../hooks/useNews';

const News = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const { newsData, newsError } = useNews(query || false);

    if (newsError && !newsData) {
        return 'there is an error';
    }

    return (
        <div className="result_text-container">
            {newsData.entries instanceof Array && newsData.entries.length ? (
                newsData.entries.map((result) => (
                    <ResultNews
                        key={result.id}
                        title={result.title}
                        link={result.link}
                        sourceLink={result.source.href}
                        sourceTitle={result.source.title}
                        time={result.published}
                    />
                ))
            ) : (
                <NewsSkeleton num={10} />
            )}
        </div>
    );
};

export default News;
