import React from 'react';

const ResultSearch = ({
    className = '',
    link = null,
    title = null,
    domain = null,
    description = null,
}) => (
    <div className={`result_text ${className}`}>
        <a className="block result_link" href={link} target="_blank" rel="noopener noreferrer">
            <p className="result_breadcrumb">{domain || link}</p>

            {title ? <h2 className="result_title">{title}</h2> : ''}
        </a>
        {description ? <p className="result_description">{description}</p> : ''}
    </div>
);

export default ResultSearch;
