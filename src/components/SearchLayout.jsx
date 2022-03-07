import React, { useEffect } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from './Navbar';

const SearchLayout = () => {
    const [searchParam] = useSearchParams();
    const query = searchParam.get('q');
    const navigate = useNavigate();

    useEffect(() => {
        if (typeof query !== 'string' || !query.length) navigate('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return (
        <>
            <Navbar />

            <div className="container pt-5 pb-10 min-h-screen">
                <Outlet />
            </div>
        </>
    );
};

export default SearchLayout;
