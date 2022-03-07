import React from 'react';
import ReactPlayer from 'react-player';

const ResultsVideos = ({ className = '', title = null, src = null, link = null }) => (
    <div className={`result_video ${className}`}>
        <div className="result_video-wrapper">
            <ReactPlayer
                url={src}
                controls
                width="100%"
                height="100%"
                className="result_video-player"
            />
        </div>
        <a href={link || src} target="_blank" rel="noopener noreferrer" className="block">
            <h2 className="text-base truncate">{title}</h2>
        </a>
    </div>
);

export default ResultsVideos;
