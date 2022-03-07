import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSearchContext } from '../contexts/SearchContext';

const SearchFilter = ({ className = '', routes = [] }) => {
    const { search } = useSearchContext();

    return (
        <div className={`searchfilter ${className}`}>
            {routes.map((route) => (
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'searchfilter_item active' : 'searchfilter_item'
                    }
                    key={route.path}
                    to={`/${route.path}?q=${search.split(' ').join('+')}`}
                >
                    <i className={`bi bi-${route.icon}`} />
                    <font>{route.text || route.path}</font>
                </NavLink>
            ))}
        </div>
    );
};

export default SearchFilter;
