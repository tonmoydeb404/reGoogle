import React from 'react';

export const VideosSkeletonItem = () => (
    <div className="animate-pulse">
        <div className="aspect-video skeleton_component rounded-sm mb-3" />
        <div className="h-3 w-10/12 skeleton_component rounded-sm mb-2" />
        <div className="h-2 w-8/12 skeleton_component rounded-sm" />
    </div>
);

const VideosSkeleton = ({ num = 1 }) =>
    typeof num === 'number' && num
        ? Array.from(Array(num).keys()).map((item) => <VideosSkeletonItem key={item} />)
        : '';

export default VideosSkeleton;
