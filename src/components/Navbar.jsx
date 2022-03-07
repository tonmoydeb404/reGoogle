import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useThemeContext } from '../contexts/ThemeContext';
import Logo from '../images/logo.svg';
import Searchbox from './Searchbox';
import SearchFilter from './SearchFilter';

const Navbar = ({ className = '' }) => {
    const { theme, setTheme } = useThemeContext();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSearch = (query) => {
        navigate(`${location.pathname}?q=${query}`);
    };

    return (
        <nav className={`navbar  ${className}`}>
            <div className="container ">
                <Link to="/" className="logo ">
                    <img src={Logo} alt="ReGoogle" className="logo_image" />
                    <h1 className="logo_text">reGoogle</h1>
                </Link>

                <div className="search_wrapper ">
                    <Searchbox
                        className="w-full"
                        callBack={(q) => handleSearch(q.split(' ').join('+'))}
                    />
                    <SearchFilter
                        className="mt-3 w-full"
                        routes={[
                            { path: 'search', text: 'Search', icon: 'search' },
                            { path: 'images', text: 'Images', icon: 'image' },
                            { path: 'news', text: 'News', icon: 'newspaper' },
                            { path: 'videos', text: 'Videos', icon: 'camera-video' },
                        ]}
                    />
                </div>

                <button className="theme_toggler " onClick={() => setTheme({ type: 'TOGGLE' })}>
                    {theme === 'DARK' ? (
                        <i className="bi bi-sun inline-block" />
                    ) : (
                        <i className="bi bi-moon-stars inline-block" />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
