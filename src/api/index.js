import axios from 'axios';

const api = axios.create({
    baseURL: 'https://google-search3.p.rapidapi.com/api/v1/',
    headers: {
        'x-proxy-location': 'BD',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
    },
});

export default api;
