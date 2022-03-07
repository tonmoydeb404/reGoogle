import React from 'react';

export const NewsSkeletonItem = () => (
    <div className="animate-pulse result_news">
        <div className="flex w-full mb-2">
            <div className="h-4 w-4 skeleton_component rounded-sm mr-2 " />
            <div className="h-4 w-24 skeleton_component rounded-sm" />
        </div>
        <div className="h-5 w-60 skeleton_component rounded-sm mb-4" />
        <div className="h-2 w-20 skeleton_component rounded-sm mb-0.5" />
    </div>
);

const NewsSkeleton = ({ num = 1 }) =>
    typeof num === 'number' && num
        ? Array.from(Array(num).keys()).map((item) => <NewsSkeletonItem key={item} />)
        : '';

export default NewsSkeleton;
