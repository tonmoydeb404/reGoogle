import React from 'react';

const ResultNews = ({
    className = '',
    sourceLink = null,
    sourceTitle = null,
    link = null,
    title = null,
    time = null,
}) => (
    <div className={`result_news ${className}`}>
        <a href={sourceLink} target="_blank" className="result_source" rel="noreferrer">
            <img
                src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${sourceLink}`}
                alt={sourceTitle}
            />
            {sourceTitle}
        </a>
        <a className="block" href={link} target="_blank" rel="noopener noreferrer">
            <h2 className="result_title">{title}</h2>
        </a>

        <font className="result_time">{time}</font>
    </div>
);

export default ResultNews;
