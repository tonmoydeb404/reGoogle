import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Searchbox from '../components/Searchbox';
import { useSearchContext } from '../contexts/SearchContext';
import { useThemeContext } from '../contexts/ThemeContext';
import Logo from '../images/logo.svg';

const Home = () => {
    const navigate = useNavigate();
    const { theme, setTheme } = useThemeContext();
    const { setSearch } = useSearchContext();

    // clean up the search text on index page
    useEffect(() => {
        setSearch('');
    }, [setSearch]);

    return (
        <div className="hero">
            <h1 className="hero_logo">
                <img src={Logo} alt="ReGoogle" className="logo_image " />
                reGoogle
            </h1>
            <Searchbox callBack={(query) => navigate(`/search?q=${query.split(' ').join('+')}`)} />
            {typeof theme === 'string' && theme.length ? (
                <button
                    className="hero_themetoggler mt-5 font-medium"
                    onClick={() => setTheme({ type: 'TOGGLE' })}
                >
                    theme : {theme.toLowerCase()}
                </button>
            ) : (
                ''
            )}
        </div>
    );
};

export default Home;
