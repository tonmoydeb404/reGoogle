import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import { SearchContextProvider } from './contexts/SearchContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import Routes from './routes';

function App() {
    return (
        <BrowserRouter>
            <SearchContextProvider>
                <ThemeContextProvider>
                    <Routes />
                    <Footer />
                </ThemeContextProvider>
            </SearchContextProvider>
        </BrowserRouter>
    );
}

export default App;
