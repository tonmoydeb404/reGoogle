import React from 'react';

const ResultsImages = ({
    className = '',
    href = null,
    src = null,
    alt = null,
    title = null,
    domain = null,
}) => (
    <div className={`${className}`}>
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
            <img
                src={src}
                alt={alt || title}
                className=" aspect-square object-cover w-full h-fit mb-3"
            />
            <h2 className="text-base truncate">{title || alt}</h2>
        </a>
        <a
            href={`https://${domain.split(' ').pop() || domain}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm block"
        >
            {domain.split(' ').pop() || domain}
        </a>
    </div>
);

export default ResultsImages;
