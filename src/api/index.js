import axios from 'axios';

const api = axios.create({
    baseURL: 'https://google-search3.p.rapidapi.com/api/v1/',
    headers: {
        'x-proxy-location': 'BD',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': 'd0dc2c53f2msh9957bdcc2b8bd98p15f607jsna5a3744deea3',
    },
});

export default api;
