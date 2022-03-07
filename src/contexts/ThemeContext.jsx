import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';

const ThemeContext = createContext('DARK');

export const useThemeContext = () => useContext(ThemeContext);

const initialState = 'DARK';

const reducer = (state, action) => {
    switch (action.type) {
        case 'LIGHT':
            localStorage.setItem('theme', 'LIGHT');
            return 'LIGHT';
        case 'DARK':
            localStorage.setItem('theme', 'DARK');
            return 'DARK';
        case 'TOGGLE':
            localStorage.setItem('theme', state === 'LIGHT' ? 'DARK' : 'LIGHT');
            return state === 'LIGHT' ? 'DARK' : 'LIGHT';
        default:
            return state;
    }
};

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useReducer(reducer, initialState);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (typeof savedTheme === 'string') setTheme({ type: savedTheme });
    }, []);

    useEffect(() => {
        if (typeof theme === 'string' && theme === 'DARK') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const value = useMemo(() => ({ theme, setTheme }), [theme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
