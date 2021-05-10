import axios from 'axios';

const api = axios.create({
    // 'http://192.168.0.107:3333'
    // baseURL: 'http://10.0.2.2:3333/',
    baseURL: 'http://192.168.0.105:3333/',
});

export default api;