import React from 'react';

export const ImagesSkeletonItem = () => (
    <div className="animate-pulse">
        <div className="aspect-square skeleton_component rounded-sm mb-3" />
        <div className="h-3 w-10/12 skeleton_component rounded-sm mb-2" />
        <div className="h-2 w-8/12 skeleton_component rounded-sm" />
    </div>
);

const ImagesSkeleton = ({ num = 1 }) =>
    typeof num === 'number' && num
        ? Array.from(Array(num).keys()).map((item) => <ImagesSkeletonItem key={item} />)
        : '';

export default ImagesSkeleton;
