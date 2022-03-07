import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ResultsImages from '../components/Results/ResultsImages';
import ImagesSkeleton from '../components/skeletons/ImagesSkeleton';
import useImages from '../hooks/useImages';

const Images = () => {
    const [searchParams] = useSearchParams();

    const query = searchParams.get('q');
    const { imagesData, imagesError } = useImages(query || false);

    if (imagesError && !imagesData) {
        return 'there is an error';
    }

    return (
        <div className="result_images-container">
            {imagesData.image_results ? (
                imagesData.image_results.map((result) => (
                    <ResultsImages
                        key={result.link.href + result.link.alt}
                        href={result.link.href}
                        title={result.link.title}
                        domain={result.link.domain}
                        alt={result.image.alt}
                        src={result.image.src}
                    />
                ))
            ) : (
                <ImagesSkeleton num={10} />
            )}
        </div>
    );
};

export default Images;
