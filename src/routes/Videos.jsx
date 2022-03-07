import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ResultsVideos from '../components/Results/ResultsVideos';
import VideosSkeleton from '../components/skeletons/VideosSkeleton';
import useVideos from '../hooks/useVideos';

const Videos = () => {
    const [searchParams] = useSearchParams();

    const query = searchParams.get('q');

    const { videosData, videosError } = useVideos(query || false);

    if (videosError && !videosData) {
        return 'there is an error';
    }

    return (
        <div className="result_video-container">
            {videosData.results ? (
                videosData.results.map((result) =>
                    result.videoLink ? (
                        <ResultsVideos
                            key={result.link}
                            title={result.title}
                            link={result.link}
                            src={result.videoLink}
                        />
                    ) : (
                        ''
                    )
                )
            ) : (
                <VideosSkeleton num={20} />
            )}
        </div>
    );
};

export default Videos;
