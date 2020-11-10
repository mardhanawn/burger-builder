import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bee-burger-builder.firebaseio.com/'
});

export default instance;