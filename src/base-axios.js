import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://statsapi.mlb.com/'
});

export default instance;
