import React from 'react';

export const SearchSkeletonItem = () => (
    <div className="animate-pulse p-2">
        <div className="h-3 w-24 skeleton_component rounded-sm mb-2" />
        <div className="h-6 w-60 skeleton_component rounded-sm mb-4" />
        <div className="h-2 w-72 skeleton_component rounded-sm mb-1.5" />
        <div className="h-2 w-64 skeleton_component rounded-sm mb-1.5" />
        <div className="h-2 w-80 skeleton_component rounded-sm" />
    </div>
);

const SearchSekeleton = ({ num = 1 }) =>
    typeof num === 'number' && num
        ? Array.from(Array(num).keys()).map((item) => <SearchSkeletonItem key={item} />)
        : '';

export default SearchSekeleton;
