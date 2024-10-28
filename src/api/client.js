import axios from 'axios';

export const client = axios.create({
    baseURL: 'http://your-api-url.com', // replace with provided api url
});
